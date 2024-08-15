import { useState, createContext } from "react";
import "./App.css";
import Child from "./Child";
export const GlobalInfo = createContext();

function App() {
  const [color, setColor] = useState("green");
  const getDay = (item) => {
    console.log(item);
  };
  return (
    <>
      <GlobalInfo.Provider value={{ appColor: color, getDay: getDay }}>
        <h1 className="">App component</h1>
        <Child />
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
