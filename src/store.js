import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './features/employeeSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  
  },
  devTools: true,
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware({ thunk: true,
    serializableCheck: false,
  }).concat(logger)
});

export default store;
