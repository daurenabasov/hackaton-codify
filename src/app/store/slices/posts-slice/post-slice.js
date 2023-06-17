import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const response = await axios.get(
      "https://ridzen23.pythonanywhere.com/post/api/v1/post/"
    );

    return response.data;
  } catch (error) {
    return error;
  }
});

const getPostById = createAsyncThunk("posts/getPostById", async (id) => {
  try {
    const response = await axios.get(
      `https://ridzen23.pythonanywhere.com/post/api/v1/post/${id}/`
    );

    return response.data;
  } catch (error) {
    return error;
  }
});

const addPost = createAsyncThunk("posts/addPost", async (data) => {
  try {
    const response = await axios.post(
      "https://ridzen23.pythonanywhere.com/post/api/v1/post/",
      data
    );

    console.log(response);
  } catch (error) {
    return error;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    post: {},
    addPost: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.data = action.payload;
      })

      .addCase(getPostById.fulfilled, (state, action) => {
        state.post = action.payload;
      })

      .addCase(addPost.fulfilled, (state, action) => {
        state.addPost = action.payload;
      });
  },
});

export { postsSlice, getPosts, getPostById, addPost };
