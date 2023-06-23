import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    return response.data;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      const id = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: true };
      });
      return { ...state, rockets: newState };
    },
    cancelRocket: (state, action) => {
      const id = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: false };
      });
      return { ...state, rockets: newState };
    },
  },
  extraReducers: (builders) => {
    builders.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },
});

export const { bookRocket, cancelRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
