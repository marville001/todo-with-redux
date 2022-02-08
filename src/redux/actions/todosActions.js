import { ADD_TODO, CHANGE_TODO_STATUS, DELETE_TODO } from "../types";

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

const changeTodoStatus = (todo) => {
  return {
    type: CHANGE_TODO_STATUS,
    payload: todo,
  };
};

export { addTodo, deleteTodo, changeTodoStatus };
