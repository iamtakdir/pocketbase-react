import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/" className="nav-link">
        Show Books
      </Link>
      <Link to="/add-book" className="nav-link">
        Add Book
      </Link>
    </nav>
  );
}

export default Navbar;
