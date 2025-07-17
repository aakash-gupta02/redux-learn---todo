import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Todo = () => {
  const [todos, settodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("/api/home");
      settodos(res.data.todos);
      console.log("Fetched todos:", res.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/home/${id}`);
      toast.success("Deleted Successfully");
    } catch (error) {
      console.log("Error Deleting Todo: ", error);
    }
  };

  const ToggleComplete = async (id) => {
    try {
      await axios.put(`/api/home/${id}`);
      toast.success("Status Chnaged");
    } catch (error) {
      console.log("Error Deleting Todo: ", error);
    }
  };

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
                onClick={() => {
                  handleDelete(todo._id);
                }}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
    </>
  );
  ``;
};

export default Todo;
