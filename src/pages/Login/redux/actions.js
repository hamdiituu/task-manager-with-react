import * as types from "./types";
import { post } from "../../../utils/networking";

// export const login = (params) => {
//   return (dispatch) => {
//     return post("/users/login", params)
//       .then(({ data, status }) => {
//         if (status !== 200) {
//           throw data;
//         }
//         console.log("login başarılı");
//         return dispatch({
//           type: types.LOGIN_SUCCESS,
//           payload: data,
//         });
//       })
//       .catch((error) => {
//         return dispatch({
//           type: types.LOGIN_FAILERE,
//           // payload: "Giriş yapılamadı bir hata oluştu.",
//         });
//       });
//   };
// };

export const login = (params) => (dispatch, getState) => {
    //console.log(lastName);
    post("/users/login", params)
        .then(({ data, status }) => {
            if (status !== 200) {
                throw data;
            }
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: data,
            });
        })
        .catch((e) => {
            dispatch({
                type: types.LOGIN_FAILERE,
                payload: e,
            });
        });
};

export const logout = () => (dispatch) => {
    dispatch({
        type: types.LOGOUT_USER,
    });
};
