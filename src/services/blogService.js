import { api } from "../api/api";

export const getBlogs = async () => {
  try {
    const { data } = await api.get("blogs/");

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getBlogComments = async () => {
  try {
    const { data } = await api.get("blogs/comment/");

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getBlogCommentById = async ({ id }) => {
  try {
    const { data } = await api.get(`blogs/comment/${id}`);
    console.log(data);

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getTrevelers = async () => {
  try {
    const { data } = await api.get("moderation/travelers/");

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getTrevelerById = async ({ id }) => {
  try {
    const { data } = await api.get(`moderation/travelers/${id}`);
    console.log(data);

    return data;
  } catch (err) {
    throw new Error(err);
  }
};
