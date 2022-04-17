import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../utils/networking";
export const register = createAsyncThunk(
  "users/post",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data, status } = await post("/users", {
        name,
        email,
        password,
      });
      if (status !== 201) {
        return thunkAPI.rejectWithValue(data);
      }
      return data;
    } catch (error) {
      console.log("users/post err:", error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const slice = createSlice({
  name: "register",
  initialState: {
    isFetching: false,
    isError: false,
    isSuccess: false,
    message: null,
    error: null,
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isFetching = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
      state.isError = false;
      state.message = "Kullanıcı başarıyla oluşturuldu.";
      state.isFetching = false;
    },
    [register.rejected]: (state, { payload }) => {
      //error
      state.error = payload.error;
      state.message = "İşlem esnasında bir hata oluştu.";
      state.isError = true;
      state.isSuccess = false;
      state.isFetching = false;
    },
  },
});

//const { actions, reducer } = slice;
const { reducer } = slice;
//export const {} = actions;

export default reducer;
