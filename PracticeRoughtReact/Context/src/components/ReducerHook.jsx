import React from "react";
import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};
function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1 className="">{state}</h1>
      <button className="" onClick={() => dispatch("Increment")}>
        Increment
      </button>
      <button className="" onClick={() => dispatch("Decrement")}>
        Decrement
      </button>
    </>
  );
}

export default ReducerHook;
