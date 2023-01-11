import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchMissions from './fetch';

const GET_MISSIONS = 'Missions/Missions/GET_MISSIONS';
const JOIN_MISSIONS = 'Missions/Missions/JOIN_MISSIONS';
const EXIT_MISSIONS = 'Missions/Missions/EXIT_MISSIONS';

const initialState = {
  missions: [],
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return {
        ...state,
        missions: action.payload,
      };

    default:
      return state;
  }
};

export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const data = await fetchMissions();
  const missions = [];

  data.forEach((data) => {
    missions.push(data);
  });

  return missions;
});

export const joinMissions = createAsyncThunk(JOIN_MISSIONS, async (id) => {
  const data = await fetchMissions();
  const newState = data.map((mission) => {
    if (mission.id !== id) {
      return mission;
    }
    return { ...mission, reserved: true };
  });
  return newState;
});

export const exitMissions = createAsyncThunk(EXIT_MISSIONS, async (id) => {
  const data = await fetchMissions();
  const newState = data.map((mission) => {
    if (mission.id !== id) {
      return mission;
    }
    return { ...mission, reserved: false };
  });
  return newState;
});

export default missionReducer;
