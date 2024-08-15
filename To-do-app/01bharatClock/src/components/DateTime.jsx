import React from "react";

function DateTime() {
  let time = new Date();
  return (
    <div className="btn btn-success">
      This is the current time: {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </div>
  );
}

export default DateTime;
