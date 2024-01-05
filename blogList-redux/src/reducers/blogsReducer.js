import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";

const blogSlicer = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },
    appendNewBlog(state, action) {
      state.push(action.payload);
    },
    likeBlog(state, action) {
      const id = action.payload;
      return state.map((blog) =>
        blog.id !== id ? blog : { ...blog, likes: blog.likes + 1 }
      );
    },
    removeBlog(state, action) {
      const id = action.payload;
      return state.filter((blog) => blog.id !== id);
    },
  },
});

export const { setBlogs, appendNewBlog, likeBlog, removeBlog } =
  blogSlicer.actions;

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getBlogs();
    dispatch(setBlogs(blogs));
  };
};

export const createBlog = (content) => {
  return async (dispatch) => {
    try {
      const newBlog = await blogService.createBlog(content);
      dispatch(appendNewBlog(newBlog));
    } catch (error) {
      return error;
    }
  };
};

export const addLike = (state, id) => {
  return async (dispatch) => {
    try {
      const blogToChange = state.find((blog) => blog.id === id);

      const changedBlog = await blogService.updateBlog(id, {
        ...blogToChange,
        likes: blogToChange.likes + 1,
      });
      dispatch(likeBlog(changedBlog.id));
    } catch (error) {
      return error;
    }
  };
};

export const deleteBlog = (state, id) => {
  return async (dispatch) => {
    try {
      const blogToDelete = state.find((blog) => blog.id === id);
      await blogService.deleteBlog(blogToDelete.id);
      dispatch(removeBlog(blogToDelete.id));
    } catch (error) {
      return error;
    }
  };
};

export default blogSlicer.reducer;
