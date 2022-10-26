import React, { useEffect, useState } from "react";
import Book from "./Book";
const Shelf = ({ section, shelf, books, setBooks, changeShelf }) => {
  const bookShelf = books?.filter((book) => book.shelf === shelf);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{section}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookShelf?.map((book, i) => {
            return <Book Book={book} key={i} changeShelf={changeShelf} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
