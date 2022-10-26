import React from "react";
import { Link } from "react-router-dom";
import ShelfSearch from "./ShelfSearch";

const Search = ({
  search,
  handleSearch,
  booksFromSearch,
  changeShelf,
  loadSearch,
}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleSearch}
          />
        </div>
      </div>

      <ShelfSearch
        booksFromSearch={booksFromSearch}
        changeShelf={changeShelf}
        loadSearch={loadSearch}
      />
    </div>
  );
};

export default Search;
