import React, { useState } from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import BookLookup from "../../apis/BookLookup";

function Edit() {
  const { id } = useParams();

  const handleEdit = async (e) => {
    try {
      const res = await BookLookup.put(`/thread/${id}`, {
        review: comment,
        rating: rating,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const [rating, setRating] = useState("1");
  const [comment, setComment] = useState("");
  return (
    <div className="mb-2" style={{ marginTop: "1rem" }}>
      <form action="">
        <div className="form-row">
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
              //   onClick={handleThreadAdd}
              variant="contained"
              style={{
                backgroundColor: "#7B68EE",
                color: "white",
                marginLeft: "10px",
              }}
              onClick={() => handleEdit()}
            >
              Confirm Edit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Edit;
