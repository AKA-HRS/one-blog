import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./slice/navSlice";
import blogReducer from "./slice/blogSlice";
import searchBarReducer from "./slice/searchbarSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    blog: blogReducer,
    searchbar: searchBarReducer,
  },
});
