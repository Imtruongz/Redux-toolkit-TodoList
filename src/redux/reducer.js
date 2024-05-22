import { combineReducers } from "redux";

import filtersReducer from "../components/features/FilterSlice";
import todoListReducer from "../components/features/TodoSlice";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
