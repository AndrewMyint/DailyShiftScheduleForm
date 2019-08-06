import React from "react";

const ProgressBar = props => {
  var progressBar = [];
  for (let i in props) {
    if (props[i] !== "") {
      progressBar.push(
        <div key={i} className="progress-bar bg-success" style={{ width: "25%" }}>
          {i}
        </div>
      );
    }
  }
  return (
    <>
      <div className="progress custom-progress">{progressBar}</div>
      <button type="submit" className="btn btn-outline-secondary">
        Submit
      </button>
    </>
  );
};

export default ProgressBar;
