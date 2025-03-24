import { configureStore } from '@reduxjs/toolkit';
import repasReducer from './slices/repasSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    repas: repasReducer,
    search: searchReducer,
  },
});