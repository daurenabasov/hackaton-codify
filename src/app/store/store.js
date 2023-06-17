import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./slices/posts-slice/post-slice";

const rootReducer = combineReducers({
  posts: postsSlice.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
});
