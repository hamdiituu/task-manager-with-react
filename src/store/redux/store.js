import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import loginReducer from "../../pages/Login/redux/reducer";
import registerSlice from "../../pages/Register/slice";
const reducers = combineReducers({
  //reducers
  login: loginReducer,
  register: registerSlice,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
