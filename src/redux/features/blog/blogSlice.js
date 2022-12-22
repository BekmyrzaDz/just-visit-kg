import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogComments, fetchBlogs, fetchTrevelers } from "./blogAction";

const initialState = {
  isLoading: null,
  isSuccess: null,
  message: null,
  error: null,
  blogs: [],
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
      state.blogs = action.payload;
      state.isSuccess = true;
    },
    [fetchBlogs.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },

    // [fetchBlogComments.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [fetchBlogComments.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.message = "success";
    //   state.blogs.comments = action.payload;
    //   state.isSuccess = true;
    // },
    // [fetchBlogComments.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    //   state.error = action.payload;
    // },

    // [fetchTrevelers.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [fetchTrevelers.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.message = "success";
    //   state.blogs.trevelers = action.payload;
    //   state.isSuccess = true;
    // },
    // [fetchTrevelers.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    //   state.error = action.payload;
    // },
  },
});

export default blogSlice.reducer;
