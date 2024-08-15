import React, { useState } from "react";

function AddTodo({ addTodo, myDelete }) {
  const [toDo, setToDo] = useState("");
  const [date, setDate] = useState("");

  const handleButton = () => {
    addTodo(toDo, date);
    setToDo("");
    setDate("");
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter to do"
              value={toDo}
              onChange={(e) => setToDo(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-success" onClick={handleButton}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
