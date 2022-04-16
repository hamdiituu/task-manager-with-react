import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../../pages/Register/slice";

const store = configureStore({
  reducer: {
    register: registerSlice,
  },
});

export default store;
