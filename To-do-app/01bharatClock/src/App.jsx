import { useState } from "react";
import "./App.css";
import Desc from "./components/Desc";
import DateTime from "./components/DateTime";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  const foodItems = ["Dal", "green vegetables", "roti", "ghee", "rice"];

  return (
    <>
      <Header />
      <Desc />
      <DateTime />
      <ul className="list-group">
        {foodItems.map((item, index) => (
          <li key={index} className="list-group">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
