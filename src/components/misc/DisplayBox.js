import React from "react";
import "./DisplayBox.css";
// this should be a simple box that takes info from the backend
// and displays it
// add functionality to make increasing values green and decreasing
// values red
const DisplayBox = (props) => {
  return (
    <div className="window">
      <p>{props.info}</p>
    </div>
  );
};

export default DisplayBox;
