import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./features/blog/blogSlice";
import reducer from "./reducer";

export const store = configureStore({
  reducer: {
    store: reducer,
    blog: blogSlice,
  },
});
