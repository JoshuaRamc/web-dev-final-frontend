import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export const BooksContextProvider = (props) => {
  const [books, setBooks] = useState([]);

  return (
    <BooksContext.Provider value={{ books: books, setBooks }}>
      {props.children}
    </BooksContext.Provider>
  );
};
