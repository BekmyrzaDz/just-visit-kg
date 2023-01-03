import { api } from "../api/api";

export const getTours = async () => {
  try {
    const { data } = await api.get("trips/direction/");
    // console.log(data);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getTourById = async (id) => {
  try {
    console.log(id);
    const data = await api.get(`trips/direction/${id}`);
    console.log(data);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const createTours = async (place) => {
  try {
    const response = await api.post("trips/places", place);
    console.log(response);

    return response;
  } catch (err) {
    console.error(err);
  }
};
