import { createSlice } from "@reduxjs/toolkit";
import { fetchPlaces } from "./placeAction";

const initialState = {
  isLoading: null,
  isSuccess: null,
  message: null,
  error: null,
  places: [],
};

export const articleSlice = createSlice({
  name: "places",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPlaces.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPlaces.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = "success";
      state.places = action.payload;
      state.isSuccess = true;
    },
    [fetchPlaces.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
  },
});

export default articleSlice.reducer;
