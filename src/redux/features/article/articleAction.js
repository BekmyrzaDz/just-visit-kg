import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArticles } from "../../../services/articleService";

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async function () {
    try {
      const res = await getArticles();
      // console.log(res);
      return res;
    } catch (err) {
      throw new Error(err);
    }
  }
);
