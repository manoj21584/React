import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [input, setInput] = useState("");
  const calButton = [
    "C",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "+",
    "-",
    "*",
    "/",
    "=",
  ];

  const handleButtonClick = (value) => {
    console.log(value);
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value.toString());
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="calculator bg-white p-4 rounded shadow text-center">
        <h1>Calculator</h1>
        <input
          type="text"
          value={input}
          className="htmlForm-control mb-3 text-right"
          readOnly
        />
        <div className="row row-cols-4 g-3">
          {calButton.map((item, index) => (
            <div className="col" key={index}>
              <Button name={item} onClick={() => handleButtonClick(item)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
