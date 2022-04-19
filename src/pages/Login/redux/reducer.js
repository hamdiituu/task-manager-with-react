import * as types from "./types";

const initialState = {
    loginStatus: false,
    user: null,
    token: null,
    error: null,
    message: "Devam etmek için giriş yapınız.",
    alertTheme: "info",
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loginStatus: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case types.LOGIN_FAILERE:
            return {
                ...state,
                loginStatus: false,
                // error: action.payload,
                message: "Giriş başarısız , tekrar dene!",
                alertTheme: "danger",
            };
        case types.LOGOUT_USER:
            return initialState;

        default:
            return state;
    }
};

export default loginReducer;
