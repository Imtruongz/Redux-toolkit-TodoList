//Đây là kho giá trị mặc định và sẽ render ra UI
const initState = [
  { id: 1, name: "Đi chợ", priority: "High", completed: false },
  { id: 2, name: "Nấu cơm", priority: "Medium", completed: true },
  { id: 3, name: "Rửa bát", priority: "Low", completed: false },
];
const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
