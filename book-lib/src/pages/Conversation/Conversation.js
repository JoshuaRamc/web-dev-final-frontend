import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../../apis/BooksContext";
import BookLookup from "../../apis/BookLookup";
import AddThread from "../../components/Thread/AddThread";

function Conversation() {
  const { isbn } = useParams();
  const { selectedBook, setSelectedBook } = useContext(BooksContext);
  const { threads, setThreads } = useContext(BooksContext);

  const fetchData = async () => {
    try {
      const res = await BookLookup.get(`/${isbn}`, {
        params: {
          limit: 1,
        },
      });
      const threadRes = await BookLookup.get(`/thread/isbn/${isbn}`);
      setSelectedBook(res.data);
      setThreads(threadRes.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(selectedBook);
    console.log(threads);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {selectedBook && (
        <>
          <div className="mt-3">
            <div
              className="row row-cols-3 mb-2"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              {threads.map((thread) => {
                return (
                  // <tr>
                  //   <td>{thread.isbn_num}</td>
                  // </tr>
                  <div
                    className="card text-white bg-primary mb-3 mr-4"
                    style={{ maxWidth: "30%", minWidth: "30%" }}
                  >
                    <div className="card-header d-flex justify-content-between">
                      <span>{thread.name}</span>
                      <span>{thread.rating}/5</span>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{thread.review}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <AddThread />
        </>
      )}
    </div>
  );
}

export default Conversation;
