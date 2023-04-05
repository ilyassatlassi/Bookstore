import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 0,
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 1,
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 2,
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    removeBook(state, action) {
      let newBook = state.books.filter((book) => book.item_id !== action.payload);
      newBook = newBook.map((newBookItem, index) => ({
        ...newBookItem,
        id: index,
      }));
      return {
        ...state,
        books: [...newBook],
      };
    },
  },

});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
