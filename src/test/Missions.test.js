import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import axios from 'axios';
import renderer from 'react-test-renderer';
import Missions from '../components/Missions';
import myMissions from './missionsData';

jest.mock('axios');

const reducer = (state = { missions: { missions: myMissions } }) => state;

const store = configureStore({ reducer });

describe('Should render correctly', () => {
  it('It should get all mission loaded', async () => {
    axios.get.mockResolvedValue({ data: myMissions });
    const tree = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
