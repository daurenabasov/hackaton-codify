import { createSlice } from "@reduxjs/toolkit";
import { signUpFetch } from "./sign-up.thunk";

const initialState = {
  userData:
    {
      email: "",
      password: "",
    } || null,
  isLoading: false,
  error: "",
};

export const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpFetch.pending, (state) => {
        state.isLoading = true;
        (state.userData = null), (state.error = "");
      })
      .addCase(signUpFetch.fulfilled, (state, { type, payload }) => {
        state.isLoading = true;
        state.userData = payload;
        state.error = "";
      })
      .addCase(signUpFetch.rejected, (state, { type, payload }) => {
        state.isLoading = true;
        state.userData = null;
        state.error = "Ошибка";
      });
  },
});
