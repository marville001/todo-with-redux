import React from "react";

const TodosList = ({ todos, completeTodo, deleteTodo }) => {
  const handleCheck = (e, todo) => {
    todo.complete = e.target.checked;
    completeTodo(todo);
  };

  return (
    <div className="border p-2 my-3 rounded">
      {todos.map((todo, idx) => (
        <div
          key={todo.id}
          className="d-flex justify-content-between border-bottom my-1 align-items-center px-2 rounded"
          style={{
            backgroundColor: todo.complete ? "#c3e2c9" : "white",
          }}
        >
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={(e) => handleCheck(e, todo)}
              style={{ width: "20px", height: "20px" }}
            />

            <p className="mt-2 mx-2">{todo.todo}</p>
          </div>
          <div className="">
            <button
              onClick={(e) => deleteTodo(todo.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <h3 className="my-4 px-2">{todos.filter(todo=>todo.complete === true).length} complete items</h3>
    </div>
  );
};

export default TodosList;
