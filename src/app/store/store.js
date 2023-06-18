import { postsSlice } from "./slices/posts-slice/post-slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { signUpSlice } from "./thunks/sign-up/sign-up.slice";
import { signInSlice } from "./thunks/sign-in/sign-in.slice";

const rootReducer = combineReducers({
  signIn: signInSlice.reducer,
  signUp: signUpSlice.reducer,
  posts: postsSlice.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
});
