import { configureStore } from "@reduxjs/toolkit";
import blogs from "./features/blog/blogSlice";
import reducer from "./reducer";

export const store = configureStore({
  reducer: {
    store: reducer,
    blog: blogs,
  },
});
