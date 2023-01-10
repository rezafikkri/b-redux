import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import filtersReducer from "../features/filters/filtersSlice";
import { todosApi } from "../features/services/todos";

export default configureStore({
  reducer: {
    filters: filtersReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (gDM) => [...gDM(), logger, todosApi.middleware]
});
