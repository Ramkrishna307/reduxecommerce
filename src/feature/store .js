
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './Movies/MovieSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    // Add other reducers if needed
  },
  // Additional configuration options if needed
});

export default store;
