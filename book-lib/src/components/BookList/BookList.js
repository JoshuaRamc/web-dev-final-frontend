import { useEffect, useContext } from "react";
import React from "react";
import BookLookup from "../../apis/BookLookup";
import { BooksContext } from "../../apis/BooksContext";
import { useNavigate } from "react-router-dom";

const BookList = (props) => {
  const { books, setBooks } = useContext(BooksContext);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const res = await BookLookup.get("/findall");
      setBooks(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleBookSelect = (isbn) => {
    navigate(`/book/${isbn}`);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="list-group">
        <table className="table table-hover table-light">
          <thead>
            <tr className="bg-primary">
              <th scope="col">Title</th>
              <th scope="col">Author(s)</th>
              <th scope="col">Publication Date</th>
              <th scope="col">Page Count</th>
              <th scope="col">ISBN</th>
              <th scope="col">Conversation</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => {
              return (
                <tr onClick={() => handleBookSelect(book.isbn)} key={book.isbn}>
                  <td>{book.title}</td>
                  <td>{book.authors}</td>
                  <td>{book.publication_date}</td>
                  <td>{book.page_count}</td>
                  <td>{book.isbn}</td>
                  <td>
                    <button className="btn btn-warning">
                      Conversation Page
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
