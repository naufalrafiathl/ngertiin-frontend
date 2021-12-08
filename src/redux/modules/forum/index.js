import { createSlice } from "@reduxjs/toolkit";

const forum = createSlice({
    name: "forum",
    initialState: {
      posts: undefined
    },
    reducers: {
      setMapel(state, { payload }) {
        state.posts = payload;
        return state;
      },
    },
  });
  
  export const {
      setMapel
  } = forum.actions;
  
  export default forum.reducer;