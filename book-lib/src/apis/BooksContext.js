import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export const BooksContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);
  const [threads, setThreads] = useState([])

  return (
    <BooksContext.Provider
      value={{ books: books, setBooks, selectedBook, setSelectedBook , threads, setThreads}}
    >
      {props.children}
    </BooksContext.Provider>
  );
};
