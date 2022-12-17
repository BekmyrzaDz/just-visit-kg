import { api } from "../api/api";

export const getArticles = async () => {
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
