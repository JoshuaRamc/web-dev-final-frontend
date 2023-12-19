import React from "react";
import { Button } from "@mui/material";
import BookLookup from "../../apis/BookLookup";
import { useNavigate } from "react-router-dom";

const BookModel = ({ show, item, onClose }) => {

  const navigate = useNavigate();
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  const handleBookAdd = async (
    isbnNum,
    bookTitle,
    bookAuthors,
    bookPublication,
    bookDescription,
    bookPages,
    bookGenre
  ) => {
    try {
      const newBook = await BookLookup.post(`/createbook`, {
        isbn: isbnNum,
        title: bookTitle,
        authors: bookAuthors,
        publication_date: bookPublication,
        description: bookDescription,
        page_count: bookPages,
        genre: bookGenre,
      });
      console.log(newBook);
      navigate(`/forums`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            X
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {item.volumeInfo.categories[0]}
                  <span>{item.volumeInfo.publishedDate}</span>
                  <span>
                    {item.volumeInfo.industryIdentifiers[0].identifier}
                  </span>
                </div>
              </h4>
              <br />
              <div style={{ display: "flex" }}>
                <a href={item.volumeInfo.previewLink}>
                  <button>More</button>
                </a>
                <Button
                  style={{ marginLeft: "5px", backgroundColor: "OliveDrab" }}
                  variant="contained"
                  onClick={() =>
                    handleBookAdd(
                      item.volumeInfo.industryIdentifiers[0].identifier,
                      item.volumeInfo.title,
                      item.volumeInfo.authors[0],
                      item.volumeInfo.publishedDate,
                      item.volumeInfo.description,
                      item.volumeInfo.pageCount,
                      item.volumeInfo.categories[0]
                    )
                  }
                >
                  Thread!
                </Button>
              </div>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};
export default BookModel;
