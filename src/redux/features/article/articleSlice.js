import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "./articleAction";

const initialState = {
  isLoading: null,
  isSuccess: null,
  message: null,
  error: null,
  articles: [],
};

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchArticles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = "success";
      state.articles = action.payload;
      state.isSuccess = true;
    },
    [fetchArticles.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
  },
});

export default articleSlice.reducer;
