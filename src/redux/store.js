import { configureStore } from "@reduxjs/toolkit";
import blogs from "./features/blog/blogSlice";
import reducer from "./reducer";

export const store = configureStore({
  reducer: {
    user: reducer,
    blog: blogs,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
