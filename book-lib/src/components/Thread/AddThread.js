import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BookLookup from "../../apis/BookLookup";

const AddThread = () => {
  const { isbn } = useParams();
  const [name, setName] = useState("");
  const [comment, setComment] = useState();
  const [rating, setRating] = useState("1");

  const handleThreadAdd = async (e) => {
    e.preventDefault();
    try {
      const newThread = await BookLookup.post(`/thread/create`, {
        isbn_num: isbn,
        name,
        review: comment,
        rating,
      });
      console.log(newThread);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-2" style={{ marginTop: "1rem" }}>
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="custom-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Comment">Comment</label>
          <div style={{ display: "flex" }}>
            <textarea
              id="Comment"
              className="form-control"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{ maxWidth: "75%" }}
            ></textarea>
            <Button
              type="submit"
              onClick={handleThreadAdd}
              variant="contained"
              style={{
                backgroundColor: "#7B68EE",
                color: "white",
                marginLeft: "10px",
              }}
            >
              Add Thread
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddThread;
