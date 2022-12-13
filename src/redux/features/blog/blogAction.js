import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBlogComments,
  getBlogs,
  getTrevelers,
} from "../../../services/blogService";

export const fetchBlogs = createAsyncThunk("blog/fetchBlog", async function () {
  const res = await getBlogs();
  return res;
});
export const fetchBlogComments = createAsyncThunk(
  "blog/fetchBlogComments",
  async function () {
    const res = await getBlogComments();
    return res;
  }
);
export const fetchTrevelers = createAsyncThunk(
  "blog/fetchTrevelers",
  async function () {
    const res = await getTrevelers();
    return res;
  }
);
