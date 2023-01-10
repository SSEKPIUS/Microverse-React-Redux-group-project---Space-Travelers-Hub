import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchMissions from './fetch';

const GET_MISSIONS = 'Missions/Missions/GET_MISSIONS';

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

export default missionReducer;
