import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);
  const myObj = {
    dob: "1999",
    address: "Ziradei",
  };

  return (
    <>
      <h1 className="bg-green-400 "> i am manoj</h1>
      <Cards username="Manoj" myObj={myObj} />
      <Cards username="Sachin" />
      <Cards username="Mahi" />
    </>
  );
}

export default App;
