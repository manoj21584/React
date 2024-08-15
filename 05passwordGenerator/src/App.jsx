import { useState, useCallback, useEffect } from "react";
// import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState(false);
  const [numbers, setNumbers] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (character) str += "-+={[}&*#@%";
    htmlFor (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numbers, character, length]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, character, passwordGenerator]);

  return (
    <>
      <div
        className="w-full
        max-w-md
        mx-auto
        shadow-md
        rounded-lg
        px-4
        my-8
        text-orange-500
        bg-gray-700"
      >
        Password Generator
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            value={password}
          />
          <button className="copy">copy</button>
        </div>
        <div className="">
          <div className="">
            <input
              type="range"
              className=""
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className="">
            <input
              type="checkbox"
              className=""
              defaultChecked={numbers}
              id="numberInput"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlhtmlFor="numberInput">Numbers</label>
          </div>
          <div className="">
            <input
              type="checkbox"
              className=""
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlhtmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
