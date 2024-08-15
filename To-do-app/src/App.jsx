import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);
  // const [x, setX] = useState("");

  const addTodo = (todo, date) => {
    setTodos([...todos, { todo, date }]);
  };
  const myDelete = (index) => {
    setTodos(todos.filter((_, i) => i != index));
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo addTodo={addTodo} />
        {todos.map((item, index) => (
          <TodoItems
            key={index}
            todo={item.todo}
            date={item.date}
            myDelete={() => myDelete(index)}
          />
        ))}
      </center>
    </>
  );
}

export default App;
