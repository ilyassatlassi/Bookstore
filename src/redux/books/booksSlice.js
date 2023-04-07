import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/khxpBjnmHR04g9ylYGxp/books';

const transformData = (data) => {
  const keys = Object.keys(data);
  return keys.map((key) => {
    const bookData = data[key][0];

    return {
      item_id: key,
      author: bookData.author,
      title: bookData.title,
      category: bookData.category,
    };
  });
};

export const getBooks = createAsyncThunk('books/getBooks',
  async () => {
    try {
      const resp = await axios.get(url);
      const data = transformData(resp.data);

      return data;
    } catch (error) {
      return error.message;
    }
  });

export const insertBooks = createAsyncThunk('books/insertBooks',
  async (data) => {
    try {
      await axios.post(url, data);
      return data;
    } catch (error) {
      return error.message;
    }
  });

export const deleteBooks = createAsyncThunk('books/deleteBooks',
  async (data) => {
    try {
      await axios.delete(`${url}/${data}`, data);

      return data;
    } catch (error) {
      return error.message;
    }
  });

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        books: action.payload,
        isLoading: false,
      }))
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      // insertBook
      .addCase(insertBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(insertBooks.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload],
        isLoading: false,
      }))
      .addCase(insertBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      // delete book
      .addCase(deleteBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteBooks.fulfilled, (state, action) => ({
        ...state,
        books: state.books.filter((book) => book.item_id !== action.payload),
        isLoading: false,
      }))

      .addCase(deleteBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },

});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
