import React from "react";
import Book from "./Book";
const ShelfSearch = ({ booksFromSearch, changeShelf, loadSearch }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">None</h2>
      <div className="search-books-results">
        <ol className="books-grid">
          {loadSearch &&
            booksFromSearch?.map((book) => (
              <Book
                key={book.id}
                Book={book}
                changeShelf={changeShelf}
                loadSearch={loadSearch}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default ShelfSearch;
