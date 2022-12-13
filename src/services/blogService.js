import { api } from "../api/api";

export const getBlogs = async () => {
  try {
    const { data } = await api.get("blogs/");
    // console.log(data);

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getBlogComments = async () => {
  try {
    const { data } = await api.get("blogs/comment/");
    console.log(data);

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getTrevelers = async () => {
  try {
    const { data } = await api.get("moderation/travelers/");
    console.log(data);

    return data;
  } catch (err) {
    throw new Error(err);
  }
};
