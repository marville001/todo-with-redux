import { ADD_TODO, CHANGE_TODO_STATUS, DELETE_TODO } from "../types";

const initialState = {
  todos: [],
  name: "Todo App With Redux",
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case CHANGE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.complete = action.payload.complete;
          }
          return todo;
        }),
      };
    default:
      return { ...state };
  }
};

export default todosReducer;
