import { createSlice } from "@reduxjs/toolkit";
import { signInFetch } from "./sign-in.thunk";

const initialState = {
    userData: {
        email: "",
        password: "",
    },
    token: localStorage.getItem("token") || "",
    message: "",
    isLoading: false,
    error: ""
}

export const signUpSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signInFetch.pending, (state) => {
            state.isLoading = true;
            state.error = ""
        }).addCase(signInFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userData = action.payload.userData
            state.token = localStorage.setItem("token", action.payload.token)
            state.message = "success"
            state.error = ""
        }).addCase(signInFetch.rejected, (state, action) => {
            state.error = action.error
            state.isLoading = false
        })
    }
})

export default signUpSlice.reducer