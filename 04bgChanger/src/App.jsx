import React, { useState } from "react";
import "./App.css"; // Ensure Tailwind CSS is imported

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen flex items-center justify-center transition-colors duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap gap-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300"
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300"
          onClick={() => setColor("white")}
        >
          White
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300"
          onClick={() => setColor("magenta")}
        >
          Magenta
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300"
          onClick={() => setColor("red")}
        >
          Red
        </button>
      </div>
    </div>
  );
}

export default App;
