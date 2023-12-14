import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export const BooksContextProvider = (props) => {
  const [selectedBook, setSelectedBook] = useState([]);

  const [books, setBooks] = useState([]);

  return (
    <BooksContext.Provider
      value={{ books: books, setBooks, selectedBook, setSelectedBook }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};
