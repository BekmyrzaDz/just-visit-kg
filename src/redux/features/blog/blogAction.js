import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBlogCommentById,
  getBlogComments,
  getBlogs,
  getTrevelerById,
  getTrevelers,
} from "../../../services/blogService";

export const fetchBlogs = createAsyncThunk("blog/fetchBlog", async function () {
  try {
    const res = await getBlogs();
    return res;
  } catch (err) {
    throw new Error(err);
  }
});
export const fetchBlogComments = createAsyncThunk(
  "blog/fetchBlogComments",
  async function () {
    try {
      const res = await getBlogComments();
      return res;
    } catch (err) {
      throw new Error(err);
    }
  }
);
export const fetchBlogCommentById = createAsyncThunk(
  "blog/fetchBlogComments",
  async function (data) {
    try {
      const res = await getBlogCommentById(data);
      return res;
    } catch (err) {
      throw new Error(err);
    }
  }
);
export const fetchTrevelers = createAsyncThunk(
  "blog/fetchTrevelers",
  async function () {
    try {
      const res = await getTrevelers();
      return res;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export const fetchTrevelerById = createAsyncThunk(
  "blog/fetchTrevelers",
  async function (data) {
    try {
      const res = await getTrevelerById(data);
      return res;
    } catch (err) {
      throw new Error(err);
    }
  }
);
