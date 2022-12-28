import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { addNewBook, fetchBooks } from "../features/bookReducer";

const AddBook = (props) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Check ISBN

  //Handel Submit

  const handleSubmit = (e) => {
    e.preventDefault();

    //if book.isbn === this isbn then return isbn
    const checkIsbn = books.find((book) => book.isbn === isbn && isbn);

    if (checkIsbn) {
      return toast.error(" Book is alrady in Store ");
    }

    if (!name || !author || !isbn) {
      return toast.warning("Please Fill in all fields");
    }

    const data = {
      name,
      author,
      isbn,
    };

    dispatch(addNewBook(data));
    dispatch(fetchBooks());

    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-left">
          <h2> Add Books </h2>
        </div>

        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control m-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Author"
                className="form-control  m-3"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <input
                type="text"
                placeholder="ISBN No"
                className="form-control  m-3"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              />

              <input
                type="submit"
                className="form-control btn btn-dark  m-3 "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
