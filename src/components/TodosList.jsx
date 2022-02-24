import React from "react";
import { useSelector } from "react-redux";

const TodosList = () => {
    const { todos, loading, error } = useSelector((state) => state.todosState);

    if (loading) {
        return (
            <div>
                <h4 className="text-center my-4">Loading....</h4>
            </div>
        );
    }

    return (
        <div className="row">
            <div className="col-6 mx-auto">
                {error ? (
                    <div className="alert alert-danger">{error}</div>
                ) : (
                    todos.map((todo) => (
                        <div className="my-4">
                            <h4>{todo.title}</h4>
                            <hr />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TodosList;
