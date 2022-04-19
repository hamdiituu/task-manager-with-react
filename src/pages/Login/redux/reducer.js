import * as types from "./types";

const initialState = {
    loginStatus: false,
    user: null,
    token: null,
    error: null,
    message: "Devam etmek için giriş yapınız.",
    alertTheme: "info",
    isFetching: false,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loginStatus: true,
                user: action.payload.user,
                token: action.payload.token,
                isFetching: false,
            };
        case types.LOGIN_FAILERE:
            return {
                ...state,
                loginStatus: false,
                // error: action.payload,
                message: "Giriş başarısız , tekrar dene!",
                alertTheme: "danger",
                isFetching: false,
            };
        case types.LOGOUT_USER:
            return initialState;
        case types.LOGIN_FETCHING:
            return { ...state, isFetching: true };

        default:
            return state;
    }
};

export default loginReducer;
