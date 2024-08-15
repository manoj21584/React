import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";
import ReducerHook from "./components/ReducerHook";

function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <>
      <htmlForm onSubmit={handleSubmit}>
        <label htmlhtmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="x"
          ref={emailRef}
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlhtmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className=""
          ref={passwordRef}
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </htmlForm>
      <ReducerHook />
    </>
  );
}

export default App;
