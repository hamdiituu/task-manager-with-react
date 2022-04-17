import thunkMiddleware from "redux-thunk";
import { throttle } from "lodash";
import { loadState, saveState } from "../../utils/localStorage";
import { createStore, applyMiddleware, combineReducers } from "redux";
import loginReducer from "../../pages/Login/redux/reducer";
import registerSlice from "../../pages/Register/slice";

const localState = loadState();

const reducers = combineReducers({
  //reducers
  login: loginReducer,
  register: registerSlice,
});

const store = createStore(
  reducers,
  localState,
  applyMiddleware(thunkMiddleware)
);

store.subscribe(
  throttle(() => {
    saveState({
      login: store.getState().login,
    });
  }, 1000)
);

export default store;
