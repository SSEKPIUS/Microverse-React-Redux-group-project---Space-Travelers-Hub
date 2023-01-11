import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});
export default store;
