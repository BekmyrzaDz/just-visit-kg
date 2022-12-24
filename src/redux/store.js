import { configureStore } from "@reduxjs/toolkit";
import blogs from "./features/blog/blogSlice";
import articles from "./features/article/articleSlice";
import places from "./features/place/placeSlice";
import tours from "./features/tour/tourSlice";
import reducer from "./reducer";

export const store = configureStore({
  reducer: {
    user: reducer,
    blog: blogs,
    article: articles,
    place: places,
    tour: tours,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
