import React, { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import TodosList from "./components/TodosList";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="app-container content mt-5 p-4">
        <AddTodoForm />
        <TodosList />
      </div>
    </div>
  );
};

export default App;
