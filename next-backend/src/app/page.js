"use client";
import React, { useState } from "react";
import Todo from "./components/Todo";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      if (!input.trim()) return toast.error("Please enter a todo!");

      const res = await axios.post("/api/home", { text: input });
      toast.success("Todo added successfully!");
      setInput("");
    } catch (error) {
      console.error("Error adding todo:", error);
      toast.error("Failed to add todo");
    }
  };

  return (
    <div className="p-10">
      <ToastContainer />
      <form onSubmit={addTodo} className="flex mb-4">
        <input
          className="flex-1 border rounded-l px-3 py-2 outline-none"
          type="text"
          placeholder="Add a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          type="submit"
        >
          Add
        </button>
      </form>
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">#</th>
            <th className="py-2 px-4 border-b">Task</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {todos.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-400">
                No todos yet.
              </td>
            </tr>
          ) : (
            todos.map((todo, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{idx + 1}</td>
                <td
                  className={`py-2 px-4 border-b ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.text}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className={`px-2 py-1 rounded ${
                      todo.completed
                        ? "bg-green-200 text-green-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                    onClick={() => toggleTodo(idx)}
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => deleteTodo(idx)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )} */}

          <Todo />
        </tbody>
      </table>
    </div>
  );
}

export default TodoApp;
