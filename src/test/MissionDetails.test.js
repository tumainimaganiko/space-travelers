import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import MissionDetails from '../components/MissionDetails';
import myMissions from './missionsData';

const reducer = (
  state = {
    missions: { missions: myMissions },
  },
) => state;

const store = configureStore({ reducer });

it('Should render Mission details', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MissionDetails
          name="space 1"
          description="first space"
          id="firstItem"
          reserved
        />
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
