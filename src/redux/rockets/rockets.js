import { createAsyncThunk } from '@reduxjs/toolkit';
import getData from './services';

const GET_ROCKETS = 'Rockets/Rockets/GET_ROCKETS';
const BOOK_ROCKETS = 'Rockets/Rockets/BOOK_ROCKETS';
const CANCEL_BOOK_ROCKETS = 'Rockets/Rockets/CANCEL_BOOK_ROCKETS';

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

    case `${BOOK_ROCKETS}/fulfilled`:
      return {
        ...state,
        rockets: action.payload,
      };
    case `${CANCEL_BOOK_ROCKETS}/fulfilled`:
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

export const bookRockets = createAsyncThunk(BOOK_ROCKETS, async (id) => {
  const data = await getData();
  const newState = data.map((rocket) => {
    if (rocket.id !== id) {
      return rocket;
    }
    return { ...rocket, reserved: true };
  });

  return newState;
});

export const cancleRockets = createAsyncThunk(CANCEL_BOOK_ROCKETS, async (id) => {
  const data = await getData();
  const newState = data.map((rocket) => {
    if (rocket.id !== id) {
      return rocket;
    }
    return { ...rocket, reserved: false };
  });

  return newState;
});

export default rocketReducer;
