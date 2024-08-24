import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const searchbarSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.data = action.payload;
    },
    getSearchedData:(state,action)=>{
        const searchTerm = action.payload;
    }
  },
});

export const { setSearchData } = searchbarSlice.actions;
export default searchbarSlice.reducer;
