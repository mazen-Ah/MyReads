import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [books, setBooks] = useState();
  const [search, setSearch] = useState("");
  const [booksFromSearch, setBooksFromSearch] = useState([]);
  const [loadSearch, setLoadSearch] = useState(false);
  const api = "https://reactnd-books-api.udacity.com";
  let token = localStorage.token;
  if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);
  const headers = {
    Accept: "application/json",
    Authorization: token,
  };
  useEffect(() => {
    fetch(`${api}/books`, { headers })
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);
  const update = (book, shelf) =>
    fetch(`${api}/books/${book.id}`, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shelf }),
    }).then((res) => res.json());

  const changeShelf = async (book, shelf) => {
    await update(book, shelf);
    await fetch(`${api}/books`, { headers })
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
    handleBooksSearch(search);
  };
  const handleSearch = async (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
    handleBooksSearch(search);
  };
  const search2 = (query, maxResults) =>
    fetch(`${api}/search`, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, maxResults }),
    })
      .then((res) => res.json())
      .then((data) => data.books);

  const handleBooksSearch = async (search) => {
    await search2(search).then((res) => {
      if (res && !res.error) {
        setBooksFromSearch(
          res.map((booksSearch) => {
            books.forEach((book) => {
              if (booksSearch.id === book.id) booksSearch.shelf = book.shelf;
            });
            return booksSearch;
          })
        );
        setLoadSearch(true);
      } else {
        setBooksFromSearch("no books");
        setLoadSearch(false);
      }
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          index
          path="/"
          element={
            <Home books={books} setBooks={setBooks} changeShelf={changeShelf} />
          }
        />
        <Route
          path="/Search"
          element={
            <Search
              handleSearch={handleSearch}
              search={search}
              booksFromSearch={booksFromSearch}
              changeShelf={changeShelf}
              loadSearch={loadSearch}
            />
          }
        />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}
export default App;
