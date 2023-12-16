import React, { useState } from "react";
import BookModel from "./BookModel";
const BookCard = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        if (thumbnail !== undefined) {
          return (
            <>
              <div
                className="BookCard"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                </div>
              </div>
              <BookModel
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};
export default BookCard;
