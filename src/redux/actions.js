export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (todoID) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoID,
  };
};

export const searchTodo = (text) => {
  return {
    type: "filters/searchTodo",
    payload: text,
  };
};

export const filterStatusChange = (status) => {
  return {
    type: "filters/filterStatus",
    payload: status,
  };
};

export const filterPriority = (prioriry) => {
  return {
    type: "filters/filterPriority",
    payload: prioriry,
  };
};

//action creater => function
