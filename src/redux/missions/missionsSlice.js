import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  missions: [],
};

export const fetchMissions = createAsyncThunk(
  "missions/fetchMissions",
  async () => {
    const response = await axios.get("https://api.spacexdata.com/v3/missions");
    return response.data;
  }
);

const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    joinMission: (state, action) => {
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
    },
    leaveMission: (state, action) => {
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
    },
  },
  extraReducers: (builders) => {
    builders.addCase(fetchMissions.fulfilled, (state, action) => {
      state.missions = action.payload;
    });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
