import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookReducer";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
