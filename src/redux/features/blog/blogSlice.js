import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogComments, fetchBlogs, fetchTrevelers } from "./blogAction";

const initialState = {
  isLoading: null,
  isSuccess: null,
  message: null,
  blogs: {},
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBlogs.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBlogs.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = "success";
      state.blogs.blog = action.payload;
      state.isSuccess = true;
    },
    [fetchBlogs.rejected]: (state) => {
      state.isLoading = false;
      state.blogs.blog = null;
      state.isSuccess = false;
    },
    [fetchBlogComments.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBlogComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = "success";
      state.blogs.comments = action.payload;
      state.isSuccess = true;
    },
    [fetchBlogComments.rejected]: (state) => {
      state.isLoading = false;
      state.blogs.comments = null;
      state.isSuccess = false;
    },
    [fetchTrevelers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTrevelers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = "success";
      state.blogs.trevelers = action.payload;
      state.isSuccess = true;
    },
    [fetchTrevelers.rejected]: (state) => {
      state.isLoading = false;
      state.blogs.trevelers = null;
      state.isSuccess = false;
    },
  },
});

export default blogSlice.reducer;
