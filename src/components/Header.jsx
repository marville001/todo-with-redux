import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const {todos} = useSelector(state=>state.todosState)
  return (
    <div className="bg-dark p-4">
      <div className="content d-flex align-items-center justify-content-between">
        <h1 className="text-white">Todo App</h1>
        <h6 className="text-white">{todos.length} items</h6>
      </div>
    </div>
  );
};

export default Header;
