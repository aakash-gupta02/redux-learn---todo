import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo, deleteTodo } from "./redux/slices/counter";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log("Todos from Redux:", todos);

  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    dispatch(createTodo({ title: inputValue }));
    setInputValue("");
  };

  return (
    <>
      <form
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
        }}
        onSubmit={(e) => {
          addTodo(e);
        }}
      >
        <label style={{ fontWeight: "bold" }}>
          Enter something:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              marginLeft: "8px",
              padding: "4px 8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "4px 12px",
            borderRadius: "4px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {todos.map((todo) => {
        return (
          <div key={todo.id} style={{ marginTop: "10px", display: "flex" }}>
            <h3>{todo.title}</h3>
            <button
              onClick={() => dispatch(deleteTodo({ id: todo.id }))}
              style={{
                padding: "4px 8px",
                borderRadius: "4px",
                border: "none",
                background: "#dc3545",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
