import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookArray: [],
  };
const booksSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBook: (state,action) => {
            state.push(action.payload)
        },
        removeBook: (state,action) => {
            return state.filter((book) => booK.id !== action.payload)
        }
    }

})

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;