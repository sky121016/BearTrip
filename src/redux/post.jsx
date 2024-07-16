import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    postId: null,
    date: null,
    title: "",
    contents: "",
  },
  
  reducers:{
    addPost(state, action){
        const {
            postId,
            date,
            title,
            contents
        } = action.payload;

        state.postId = postId;
        state.date = date;
        state.title = title;
        state.contents = contents;
    },

    resetPost(state){
        state.postId = null;
        state.date = null;
        state.title = "";
        state.contents = "";
    }


  }
});


export const {
    setPost,
    resetPost
} = postSlice.actions;

export default postSlice.reducer;