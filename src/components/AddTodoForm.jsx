import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  function randomId() {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
  }

  const handleAddTodo = () => {
    const todo = {
      id: randomId(),
      todo: todoText,
      complete: false
    };
    addTodo(todo);
    setTodoText("")
  };
  
  return (
    <div className="border p-2 rounded">
      <h4 className="my-2">Add Todo Here</h4>
      <div className="form-group">
        <input
          type="text"
          placeholder="Type your todo"
          className="form-control"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <div className="d-flex justify-content-end my-2">
          <button onClick={handleAddTodo} className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoForm;
