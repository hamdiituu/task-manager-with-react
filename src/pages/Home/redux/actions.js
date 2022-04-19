import * as types from "./types";
import { get } from "../../../utils/networking";

export const getAllTasks = () => (dispatch) => {
    dispatch({
        type: types.TASKS_FETCHING,
    });
    get("/tasks")
        .then(({ data, status }) => {
            if (status !== 200) {
                throw data;
            }
            dispatch({
                type: types.TASKS_SUCCESS,
                payload: data,
            });
        })
        .catch((e) => {
            dispatch({
                type: types.TAKS_FAILURE,
            });
        });
};
