import axios from "axios";
import { postToken } from "../redux/reducer";

// const { access_token } = postToken();
const token = postToken();
console.log(postToken());

// console.log(access_token);
console.log(token);

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorisation: `Bearer ${token}`,
  },
});

// api.interceptors.request.use(
//   (request) => {
//     request.headers = {
//       Authorisation: `Bearer ${access_token}`,
//     };
//     return request;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

export const getArticles = async () => {
  // try {
  //   const response = await api.get("trips/articles");
  //   console.log(response);

  //   return response;
  // } catch (err) {
  //   console.error(err);
  // }
  try {
    const { data } = await api.get("trips/articles");
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const createArticle = async (article) => {
  try {
    const response = await api.post("trips/articles", article);
    console.log(response);

    return response;
  } catch (err) {
    console.error(err);
  }
};

export const getBlogs = async () => {
  try {
    const { data } = await api.get("blogs/");
    console.log(data);

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
