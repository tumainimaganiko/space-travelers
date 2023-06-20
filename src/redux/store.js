import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    mission: missionReducer,
  },
});

export default store;
