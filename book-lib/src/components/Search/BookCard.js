import React, { useState } from "react";
import BookModel from "./BookModel";
import { toggleShown } from "../../indexSlice";
import { useSelector, useDispatch } from "react-redux";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);

  // eslint-disable-next-line
  const isShown = useSelector((state) => state.index);

  const handleClose = async () => {
    setShow(false);
    dispatch(toggleShown(false));
  };

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
                  dispatch(toggleShown(true));
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
                onClose={() => handleClose()}
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
