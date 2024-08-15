import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      setCount(count);
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  };
  return (
    <>
      <h1>counter {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

export default App;
