import React, { useState } from "react";

function InputShopItems({ handleInput }) {
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input.trim()) {
      handleInput(input);
      setInput("");
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="htmlForm-control"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={handleAddItem}>
          Add
        </button>
      </div>
    </div>
  );
}

export default InputShopItems;
