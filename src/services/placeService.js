import { api } from "../api/api";

export const getPlaces = async () => {
  try {
    // const res = await api.get("trips/places/");
    // console.log(res);
    // return res;
    const { data } = await api.get("trips/places/");
    // console.log(data);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const createArticle = async (place) => {
  try {
    const response = await api.post("trips/places", place);
    console.log(response);

    return response;
  } catch (err) {
    console.error(err);
  }
};
