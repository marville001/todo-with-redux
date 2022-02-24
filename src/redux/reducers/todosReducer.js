import { GET_TODOS } from "../types";

const initialState = {
    todos: [],
    loading: false,
    error: "",
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS.REQUEST:
            return { ...state, todos: [], error: "", loading: true };
        case GET_TODOS.SUCCESS:
            return {
                ...state,
                todos: action.payload,
                error: "",
                loading: false,
            };
        case GET_TODOS.FAIL:
            return { ...state, error: action.payload, loading: false };

        default:
            return { ...state };
    }
};

export default todosReducer;
