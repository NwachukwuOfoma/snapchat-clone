import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../featuresappSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
