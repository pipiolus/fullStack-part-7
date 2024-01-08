import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addLike,
  deleteBlog,
  addComment,
} from "../reducers/blogsReducer";
import useField from "../hooks/useField";

const Blog = ({ blog, blogs }) => {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const comment = useField("text");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const commentText = comment.getInputProps().value;
    if (!commentText) return null;

    dispatch(addComment(blog.id, commentText));
    comment.clear();
  };
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
      <div>
        <h3>comments</h3>
        <form onSubmit={handleSubmit}>
          <input {...comment.getInputProps()} />
          <button type="submit">add comment</button>
        </form>
        <ul>
          {blog.comments.map((comment) => (
            <li key={comment.text}>{comment.text}</li>
          ))}
        </ul>
      </div>
      <hr />
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
