import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import axios from 'axios';
import myRockets from './rocketData';
import MyProfile from '../components/MyProfile';
import myMissions from './missionsData';

jest.mock('axios');

const reducer = (
  state = {
    missions: { missions: myMissions },
    rockets: { rockets: myRockets },
  },
) => state;

const store = configureStore({ reducer });

describe('Test MyProfile component', () => {
  it('shouls show reserved Rockets and Missions', () => {
    axios.get.mockResolvedValue({ data: myMissions });
    axios.get.mockResolvedValue({ data: myRockets });
    const tree = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <MyProfile />
          </Provider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
