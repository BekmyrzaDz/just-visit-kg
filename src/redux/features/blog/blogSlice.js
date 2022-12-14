import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBlogCommentById,
  fetchBlogComments,
  fetchBlogs,
  fetchTrevelerById,
  fetchTrevelers,
} from "./blogAction";

const initialState = {
  isLoading: null,
  isSuccess: null,
  message: null,
  error: null,
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
    [fetchBlogs.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },

    // [fetchBlogCommentById.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [fetchBlogCommentById.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.message = "success";
    //   state.blogs.map((item) => (item.comment = action.payload));
    //   state.isSuccess = true;
    // },
    // [fetchBlogCommentById.rejected]: (state) => {
    //   state.isLoading = false;
    //   state.blogs.map((item) => (item.comment = null));
    //   state.isSuccess = false;
    // },
    [fetchBlogComments.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBlogComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = "success";
      state.blogs.comments = action.payload;
      state.isSuccess = true;
    },
    [fetchBlogComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },

    // [fetchTrevelerById.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [fetchTrevelerById.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.message = "success";
    //   state.blogs.map((item) => (item.treveler = action.payload));
    //   state.isSuccess = true;
    // },
    // [fetchTrevelerById.rejected]: (state) => {
    //   state.isLoading = false;
    //   state.blogs.map((item) => (item.treveler = null));
    //   state.isSuccess = false;
    // },
    [fetchTrevelers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTrevelers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = "success";
      state.blogs.trevelers = action.payload;
      state.isSuccess = true;
    },
    [fetchTrevelers.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
  },
});

export default blogSlice.reducer;
