import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, title: "Learn Redux Toolkit" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },


  },
});

export const { createTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;

