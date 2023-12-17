import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BookLookup from "../../apis/BookLookup";

const AddThread = () => {
  const { isbn } = useParams();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

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
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Name"
              type="text"
              className="fomr-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating"> Rating</label>
            <select
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
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
          <textarea
            id="Comment"
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <Button type="submit" onClick={handleThreadAdd} variant="contained">
          Add Thread
        </Button>
      </form>
    </div>
  );
};
export default AddThread;
