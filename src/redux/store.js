import { configureStore } from "@reduxjs/toolkit";
import blogs from "./features/blog/blogSlice";
import articles from "./features/article/articleSlice";
import reducer from "./reducer";

export const store = configureStore({
  reducer: {
    user: reducer,
    blog: blogs,
    article: articles,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
