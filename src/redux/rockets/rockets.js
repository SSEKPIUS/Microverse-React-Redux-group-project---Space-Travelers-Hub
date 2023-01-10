import { createAsyncThunk } from '@reduxjs/toolkit';
import getData from './services';

const GET_ROCKETS = 'Rockets/Rockets/GET_ROCKETS';

const initialState = {
  rockets: [],
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return {
        ...state,
        rockets: action.payload,
      };

    default:
      return state;
  }
};

export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const data = await getData();
  const rockets = [];

  data.forEach((data) => {
    rockets.push(data);
  });

  return rockets;
});

export default rocketReducer;
