//Đây là kho giá trị mặc định và sẽ render ra UI
const initState = {
  search: "",
  status: "All",
  priority: [],
};
const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchTodo":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/filterStatus":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/filterPriority":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
