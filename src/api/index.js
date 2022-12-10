import axios from "axios";
import { postToken } from "../redux/reducer";

const { access_token } = postToken();

console.log(access_token);

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((request) => {
  request.headers = {
    Authorisation: `${access_token}`,
  };
});

export const getArticles = async () => {
  const response = await api.get("trips/articles");
  console.log(response);

  return response;
};
// getArticles();

export const createArticles = async (article) => {
  const response = await api.post("trips/articles", article);
  console.log(response);

  return response;
};
