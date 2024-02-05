import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function byeFn() {
    console.log("bye ");
  }
  function hiFn() {
    console.log("created :) ");
    return byeFn;
  }
  useEffect(() => {
    console.log("hi ");
    return () => {
      console.log("bye ");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do ..."
        ></input>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
