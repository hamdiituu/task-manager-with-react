import * as types from "./types";

const initialState = {
    isFetching: false,
    data: [],
    isError: false,
    message: "",
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TASKS_FETCHING:
            return { ...state, isFetching: true };

        case types.TASKS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                isError: false,
            };
        case types.TAKS_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
                message: "İşlem esnasında bir hata oluştu!",
            };
        default:
            return state;
    }
};

export default homeReducer;
