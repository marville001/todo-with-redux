import axios from "axios";
import { GET_TODOS } from "../types";

export const getTodosAction = () => async (dispatch) => {
    dispatch({
        type: GET_TODOS.REQUEST,
    });
    try {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        );

        dispatch({
            type: GET_TODOS.SUCCESS,
            payload: data.splice(0, 10),
        });
    } catch (error) {
        dispatch({
            type: GET_TODOS.FAIL,
            payload: "An error occurred",
        });
    }

    //
};
