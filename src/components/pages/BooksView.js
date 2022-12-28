import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { deleteBook, fetchBooks } from "../features/bookReducer";

function BooksView(props) {
  const { books } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handelDelete = (id) => {
    dispatch(deleteBook(id));
    // dispatch(fetchBooks());
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-end">
          <Link to="/add-book" className="btn btn-outline-dark">
            Add Books
          </Link>
        </div>

        <div className="col-md-10 mx-auto">
          <h2> FIND ALL YOUR BOOKS HERE </h2>
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">ISBN</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.map((book) => (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.isbn}</td>
                    <td>
                      <Link
                        to={`/edit/${book.id}`}
                        state={{ data: book }}
                        className="btn btn-sm btn-success">
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => handelDelete(book.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BooksView;
