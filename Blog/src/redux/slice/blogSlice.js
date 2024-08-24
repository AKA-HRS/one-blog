import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  panel: false,
  data: [],
  searchTerm: "",
  categorywise: [],
  selectedBlog: JSON.parse(localStorage.getItem("selectedBlog")) || {},
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogData: (state, action) => {
      state.data = action.payload;
    },
    setBlogDataByGroup: (state, action) => {
      state.categorywise = action.payload;
    },
    setBlogPanel: (state, action) => {
      state.panel = action.payload;
    },
    setSelectedBlog: (state, action) => {
      state.selectedBlog = action.payload;
      localStorage.setItem("selectedBlog", JSON.stringify(action.payload));
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  setBlogData,
  setSearchTerm,
  setBlogDataByGroup,
  setSelectedBlog,
  setBlogPanel,
} = blogSlice.actions;
export default blogSlice.reducer;
