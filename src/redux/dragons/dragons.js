import { createAsyncThunk } from '@reduxjs/toolkit';
import getData from './fetch';

const GET_DRAGONS = 'Dragons/Dragons/GET_DRAGONS';

const initialState = {
  dragons: [],
};

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_DRAGONS}/fulfilled`:
      return {
        ...state,
        dragons: action.payload,
      };

    default:
      return state;
  }
};

export const getDragons = createAsyncThunk(GET_DRAGONS, async () => {
  const data = await getData();
  const dragons = [];

  data.forEach((data) => {
    dragons.push(data);
  });

  return dragons;
});

export default dragonReducer;
