import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPlaces } from "../../../services/placeService";

export const fetchPlaces = createAsyncThunk(
  "place/fetchPlaces",
  async function () {
    try {
      const res = await getPlaces();
      console.log(res);
      return res;
    } catch (err) {
      throw new Error(err);
    }
  }
);
