import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  books: null,
  status: "idle",
  error: null,
  loading: false,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios.get(
    "http://127.0.0.1:8090/api/collections/books/records",
  );

  return response.data.items;
});

export const addNewBook = createAsyncThunk(
  "books/addNewBook",
  async (initialBook) => {
    const response = await axios.post(
      "http://127.0.0.1:8090/api/collections/books/records",
      initialBook,
    );
    return response.data;
  },
);

export const updateBook = createAsyncThunk(
  "books/updateBook",
  async ({ data, id }) => {
    console.log(data, id);
    const response = await axios.patch(
      `http://127.0.0.1:8090/api/collections/books/records/${id}`,
      data,
    );
    return response.data;
  },
);

export const deleteBook = createAsyncThunk("books/deleteBook", async (id) => {
  const response = await axios.delete(
    `http://127.0.0.1:8090/api/collections/books/records/${id}`,
  );

  return id;
});

const booksSlice = createSlice({
  name: "books",
  initialState,

  extraReducers: (builder) => {
    // Load Books builders
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Add New Book builders
    builder
      .addCase(addNewBook.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload);
        toast.success("Book Added Successfully");
      })
      .addCase(addNewBook.rejected, (state, action) => {
        state.loading = false;
        toast.error("Book Added Failed");
      });

    // Update Book builders
    builder
      .addCase(updateBook.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.loading = false;

        const index = state.books.findIndex(
            (book) => book.id === action.payload.id,
          ),
          updatedBook = action.payload;

        state.books[index] = updatedBook;

        toast.success("Book Updated Successfully");
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.loading = false;
        toast.error("Book Updated Failed");
      });

    // Delete Book builders

    builder
      .addCase(deleteBook.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;

        const filterBooks = state.books.filter(
          (book) => book.id !== action.payload,
        );

        state.books = filterBooks;
        toast.success("Book Deleted Successfully");
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        toast.error("Book Deleted Failed");
      });
  },
});

export default booksSlice.reducer;
