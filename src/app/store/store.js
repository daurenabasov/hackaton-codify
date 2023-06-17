import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./slices/posts-slice/post-slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import registrationReducer from "./thunks/sign-up/sign-up.slice";
const rootReducer = combineReducers({
  signUp: registrationReducer,
  posts: postsSlice.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
});
