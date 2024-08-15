import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Button({ name, handleButton }) {
  return (
    <button className="btn btn-success btn-block" onClick={handleButton}>
      {name}
    </button>
  );
}

export default Button;
