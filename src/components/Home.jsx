import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const Home = ({ books, setBooks, changeShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            section="Currently Reading"
            shelf="currentlyReading"
            books={books}
            setBooks={setBooks}
            changeShelf={changeShelf}
          />
          <Shelf
            section="Want to Read"
            shelf="wantToRead"
            books={books}
            setBooks={setBooks}
            changeShelf={changeShelf}
          />
          <Shelf
            section="Read"
            shelf="read"
            books={books}
            setBooks={setBooks}
            changeShelf={changeShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/Search"></Link>
      </div>
    </div>
  );
};

export default Home;
