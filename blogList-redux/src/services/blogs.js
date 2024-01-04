import axios from "axios";
const baseUrl = "http://localhost:3003/api/blogs";
let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getBlogs = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createBlog = async (newObj) => {
  try {
    const config = {
      headers: { Authorization: token },
    };
    const response = await axios.post(baseUrl, newObj, config);
    return response.data;
  } catch (error) {
    console.log("SCREAMING AAAAAAAAH", error);
  }
};

const updateBlog = async (id, newObj) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObj);
  return response.data;
};

const deleteBlog = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  await axios.delete(`${baseUrl}/${id}`, config);
};

export default {
  getBlogs,
  createBlog,
  setToken,
  updateBlog,
  deleteBlog,
};
