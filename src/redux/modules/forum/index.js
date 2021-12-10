import { createSlice } from "@reduxjs/toolkit";

const forum = createSlice({
    name: "forum",
    initialState: {
      posts: undefined,
      post: undefined
    },
    reducers: {
      setPosts(state, { payload }) {
        state.posts = payload;
        return state;
      },
      setPost(state, { payload }) {
        state.post = payload;
        return state;
      },
    },
  });
  
  export const {
      setPosts,
      setPost
  } = forum.actions;
  
  export default forum.reducer;