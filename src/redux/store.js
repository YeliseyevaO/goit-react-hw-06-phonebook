import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './reducer.js';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
