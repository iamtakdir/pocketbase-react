import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateBook } from "../features/bookReducer";

function EditBook(props) {
  const { id } = useParams();
  const location = useLocation();

  // Getting Old Data from URL
  const { data } = location.state;
  const book = data;

  // Updating New Data
  const [name, setName] = useState(book.name);
  const [author, setAuthor] = useState(book.author);
  const [isbn, setIsbn] = useState(book.isbn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      name,
      author,
      isbn,
    };

    dispatch(updateBook({ data: updatedData, id }));
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-left">
          <h2 className="display-3"> Edit Book - {id} </h2>
        </div>

        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handelSubmit}>
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
                value="Update"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
