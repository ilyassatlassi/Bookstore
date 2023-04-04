import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice'
import categoriesReducer from './categories/categories'

export const store = configureStore({
    reducer: {
      books: bookReducer,
      categories:categoriesReducer
    },
  });