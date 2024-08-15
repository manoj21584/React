import React from "react";

function TodoItems({ todo, date, myDelete }) {
  return (
    <>
      <div className="row">
        <div className="col-6">{todo}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button className="btn btn-danger" onClick={myDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItems;
