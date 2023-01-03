import { createSlice } from "@reduxjs/toolkit";
import { fetchTourById, fetchTours } from "./tourAction";

const initialState = {
  isLoading: null,
  isSuccess: null,
  message: null,
  error: null,
  tour: null,
  tours: [],
};

export const tourSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTours.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTours.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = "success";
      state.tours = action.payload;
      state.isSuccess = true;
    },
    [fetchTours.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },

    [fetchTourById.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTourById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = "success";
      state.tour = action.payload;
      state.isSuccess = true;
    },
    [fetchTourById.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
  },
});

export default tourSlice.reducer;
