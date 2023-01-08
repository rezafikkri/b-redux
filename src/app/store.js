import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import todoReducer from "../features/todos/todosSlice";
import filtersReducer from "../features/filters/filtersSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    filters: filtersReducer,
  },
  middleware: (gDM) => [...gDM(), logger]
});
