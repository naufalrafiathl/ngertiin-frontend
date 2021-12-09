import { createSlice } from "@reduxjs/toolkit";

const forum = createSlice({
    name: "forum",
    initialState: {
      posts: undefined
    },
    reducers: {
      setPost(state, { payload }) {
        state.posts = payload;
        return state;
      },
    },
  });
  
  export const {
      setPost
  } = forum.actions;
  
  export default forum.reducer;