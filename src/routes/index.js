import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "../components/pages/Error";
import Navbar from "../components/layouts/Navbar";
import BooksView from "../components/pages/BooksView";
import AddBook from "../components/pages/AddBook";
import Footer from "../components/layouts/Footer";
import EditBook from "../components/pages/EditBook";

function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<BooksView />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default Index;
