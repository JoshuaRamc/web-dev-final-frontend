import { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useParams } from "react-router-dom";
import { BooksContext } from "../../apis/BooksContext";
import BookLookup from "../../apis/BookLookup";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import AddThread from "../../components/Thread/AddThread";

function Conversation() {
  const { isbn } = useParams();
  const { selectedBook, setSelectedBook } = useContext(BooksContext);
  const { threads, setThreads } = useContext(BooksContext);
  const navigate = useNavigate();

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

  const handleDelete = async (id) => {
    try {
      const res = await BookLookup.delete(`/thread/${id}`);
      setThreads(
        threads.filter((thread) => {
          return thread.id !== id;
        })
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = async (id) => {
    try {
      navigate(`/edit/${id}`);
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
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <h1>{selectedBook.title}</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          fontSize: 14,
          textAlign: "center",
        }}
      >
        "{selectedBook.description}"
      </div>

      <AddThread />
      {selectedBook && (
        <>
          <div className="mt-3">
            <div
              className="row row-cols-3 mb-2"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              {threads.map((thread) => {
                return (
                  <div
                    className="card text-white mb-3 mr-4"
                    style={{
                      maxWidth: "30%",
                      minWidth: "30%",
                      backgroundColor: "MediumPurple",
                    }}
                  >
                    <div className="card-header d-flex justify-content-between">
                      <span>{thread.name}</span>
                      <span>{thread.rating}/5</span>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{thread.review}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="text"
                        sx={{ color: "black" }}
                        startIcon={<EditIcon />}
                        onClick={() => handleEdit(thread.id)}
                      ></Button>
                      <Button
                        variant="text"
                        sx={{ color: "black" }}
                        startIcon={<HighlightOffIcon />}
                        onClick={() => handleDelete(thread.id)}
                      ></Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Conversation;
