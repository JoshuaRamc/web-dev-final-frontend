import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../../apis/BooksContext";
import BookLookup from "../../apis/BookLookup";

function Conversation() {
  const { isbn } = useParams();
  const { selectedBook, setSelectedBook } = useContext(BooksContext);

  const fetchData = async () => {
    try {
      const res = await BookLookup.get(`/${isbn}`, {
        params: {
          limit: 1,
        },
      });
      setSelectedBook(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    fetchData();
    console.log(selectedBook);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>{selectedBook && selectedBook.title}</h1>
    </>
  );
}

export default Conversation;
