import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/counter/index";

export const store = configureStore({
  reducer: todoReducer,
});
