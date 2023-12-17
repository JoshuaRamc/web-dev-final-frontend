import React from "react";

const Thread = (comments) => {
  return (
    <div
      className="row row-cols-3 mb-2"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%", minWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Josh</span>
          <span>4/5</span>
        </div>
        <div className="card-body">
          <p className="card-text">This card is great.</p>
        </div>
      </div>
    </div>
  );
};

export default Thread;
