import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nav: "/",
};


const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNav: (state, action) => {
      state.nav = action.payload;
    },
  },
});

export const { setNav } = navbarSlice.actions;

export default navbarSlice.reducer;
