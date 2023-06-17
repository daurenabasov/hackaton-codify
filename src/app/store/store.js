import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./slices/posts-slice/post-slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import registrationReducer from "./thunks/sign-up/sign-up.slice"
import authReducer from "./thunks/sign-in/sign-in.slice"

const rootReducer = combineReducers({
    signIn: registrationReducer,
    auth: authReducer
  posts: postsSlice.reducer,

})

export const setupStore = configureStore({
  reducer: rootReducer,
});
