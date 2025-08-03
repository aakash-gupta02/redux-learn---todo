import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all todos
export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const res = await axios.get("/api/home");
  console.log("Fetched todos:", res.data);
  return res.data.todos; // Extract the todos array from response
  
});

// Create new todo (expects a single text field)
export const addTodo = createAsyncThunk("todo/addTodo", async (title) => {
  const res = await axios.post("/api/home", { title });
  return res.data;
});

// Delete todo by id
export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  await axios.delete(`/api/home/${id}`);
  return id;
});

const todoSlice = createSlice({
  name: "todo",
  initialState: { 
    todos: [], 
    loading: false,
    error: null 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload; // Now directly receiving the array
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.unshift(action.payload); // Add to beginning
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo._id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
