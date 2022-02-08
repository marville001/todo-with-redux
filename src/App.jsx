import React, { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import TodosList from "./components/TodosList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: "sdsdfs", todo: "Go to the gym", complete: false },
    { id: "erer", todo: "Ride my bicycle", complete: false },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (todo) => {
    const id = todo.id;
    const complete = todo.complete;

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = complete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id)=>{
    //   const remTodos = todos.filter(todo=>todo.id !== id)
    //   console.log({remTodos});
      setTodos(todos.filter(todo=>todo.id !== id))
  }


  return (
    <div className="main-container">
      <Header todos={todos} />
      <div className="app-container content mt-5 p-4">
        <AddTodoForm addTodo={addTodo} />
        <TodosList deleteTodo={deleteTodo} completeTodo={completeTodo} todos={todos} />
      </div>
    </div>
  );
};

export default App;
