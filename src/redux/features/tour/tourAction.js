import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTourById, getTours } from "../../../services/tourService";

export const fetchTours = createAsyncThunk(
  "tour/fetchTours",
  async function () {
    try {
      const res = await getTours();
      console.log(res);
      return res;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export const fetchTourById = createAsyncThunk(
  "tour/fetchTourById",
  async function (id) {
    try {
      const res = await getTourById(id);
      console.log(res);
      return res;
    } catch (err) {
      throw new Error(err);
    }
  }
);
