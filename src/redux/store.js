import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export default store;
