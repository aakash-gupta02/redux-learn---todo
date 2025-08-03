import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodo  } from "../redux/slices/todoSlices";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log("Todos:", todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      {todos &&
        todos.map((todo, i) => (
          <tr key={i} className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b">{i + 1}</td>
            <td className="py-2 px-4 border-b">{todo.text || "No Title"}</td>

            <td className="py-2 px-4 border-b">
              {todo.completed ? (
                <button
                  onClick={() => {
                    ToggleComplete(todo._id);
                  }}
                  className="px-2 py-1 rounded bg-green-200 text-green-800"
                >
                  Completed
                </button>
              ) : (
                <button
                  onClick={() => {
                    ToggleComplete(todo._id);
                  }}
                  className="px-2 py-1 rounded bg-yellow-200 text-yellow-800"
                >
                  Pending
                </button>
              )}
            </td>

            <td className="py-2 px-4 border-b">
              <button
                onClick={() => {dispatch(deleteTodo(todo._id)), console.log("Todo deleted:", todo._id)}}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default Todo;
