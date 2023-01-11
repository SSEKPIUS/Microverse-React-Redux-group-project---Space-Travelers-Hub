import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';
import dragonReducer from './dragons/dragons';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragons: dragonReducer,
  },
});
export default store;
