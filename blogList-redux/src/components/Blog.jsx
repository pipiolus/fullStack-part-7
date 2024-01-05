import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addLike, deleteBlog } from "../reducers/blogsReducer";

const Blog = ({ blog, blogs }) => {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!blog) return null;
  return (
    <div>
      <h3>{blog.title}</h3>
      <h4>By {blog.author}</h4>
      <a href={blog.url} target="blank">
        {blog.url}
      </a>
      <div>
        <h4>Likes: {blog.likes}</h4>
        <button onClick={() => dispatch(addLike(blogs, blog.id))}>
          👍
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <p>added by {blog.user.username}</p>
        {blog.user.username !== loggedUser.username ? null : (
          <button
            style={{ marginLeft: "0.3em" }}
            onClick={() => {
              dispatch(deleteBlog(blogs, blog.id));
              navigate("/");
            }}
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
