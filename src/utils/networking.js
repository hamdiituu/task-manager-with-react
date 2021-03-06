import axios from "axios";
import store from "../store/redux/store";
const instance = axios.create({
    baseURL: "https://task-manager-cagri.herokuapp.com",
});

//response middleware
instance.interceptors.response.use(
    (response) => {
        // console.log("--response", response);
        return response;
    },
    (error) => {
        console.log("--error.response", error);

        //   if (error.message === "Network Error") {
        //     notfy.error(
        //       "<b>Sunucuya erişilemedi!</b>  <br/>İnternet bağlantınızı kontrol ediniz. "
        //     );
        //   } else if (error.response.status === 401) {
        //     store.dispatch(singOutAccount());
        //   }
        return error.response;
    }
);

//request middleware
instance.interceptors.request.use(
    (request) => {
        // console.log("--request", request);
        return request;
    },
    (error) => {
        console.log("--error.request", error);
    }
);

export const get = (url) => {
    return instance.get(url, {
        headers: {
            Authorization: "Bearer " + _getToken(),
        },
    });
};

export const post = (url, params = null) => {
    return instance.post(url, params, {
        headers: {
            Authorization: "Bearer " + _getToken(),
        },
    });
};

export const put = (url, params = null) => {
    return instance.put(url, params, {
        headers: {
            Authorization: "Bearer " + _getToken(),
        },
    });
};

export const del = (url) => {
    return instance.delete(url, {
        headers: {
            Authorization: "Bearer " + _getToken(),
        },
    });
};

const _getToken = () => store.getState().login.token;
