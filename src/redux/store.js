//configure store bao gom redux devtool
import { configureStore } from "@reduxjs/toolkit";

import FilterSlice from "../components/features/FilterSlice";
import TodoSlice from "../components/features/TodoSlice";

const store = configureStore({
  reducer: {
    filters: FilterSlice.reducer,
    todoList: TodoSlice.reducer,
  },
});

export default store;
