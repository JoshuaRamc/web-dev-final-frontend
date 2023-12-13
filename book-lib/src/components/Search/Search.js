import axios from "axios";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

//123435
function SearchBooks() {
  async function getBookByIsbn(data) {
    axios
      .get(`${isbn}`)
      .then((res) => {
        setBook(JSON.stringify(res.data, null, 4));
        console.log(book);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [isbn, setIsbn] = useState("http://localhost:5000/");
  const [book, setBook] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <TextField
          id="outlined-basic"
          label="isbn"
          style={{ width: "500px" }}
          variant="outlined"
          defaultValue="http://localhost:5000/"
          onChange={(e) => setIsbn(e.target.value)}
        />
        <Button
          style={{
            marginTop: "6px",
            marginBottom: "6px",
            backgroundColor: "#D8BFD8",
            color: "SlateBlue",
          }}
          variant="contained"
          onClick={() => getBookByIsbn(isbn)}
        >
          Send Request
        </Button>
      </div>
    </>
  );
}

export default SearchBooks;
