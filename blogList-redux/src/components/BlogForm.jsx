import { useDispatch } from "react-redux";
import { createBlog } from "../reducers/blogsReducer";
import { setNotification } from "../reducers/notificationReducer";
import useField from "../hooks/useField";

const BlogForm = ({ blogFormRef }) => {
  const title = useField("text");
  const author = useField("text");
  const url = useField("url");

  const dispatch = useDispatch();

  const addBlog = (event) => {
    event.preventDefault();
    dispatch(
      createBlog({
        title: title.getInputProps().value,
        author: author.getInputProps().value,
        url: url.getInputProps().value,
      })
    );
    dispatch(setNotification("Creation successfull!", "success", 3));
    title.clear();
    author.clear();
    url.clear();
    blogFormRef.current.toggleVisibility();
  };

  return (
    <div className="blog-form-container">
      <h3>Add a new blog</h3>
      <form
        className="blog-form"
        onSubmit={addBlog}
        data-testid="New-Blog-Form"
      >
        <label htmlFor="title">Title</label>
        <input
          {...title.getInputProps()}
          placeholder="How to kill more orcs"
          required
          data-testid="Title-Input"
        />
        <label htmlFor="author">Author</label>
        <input
          {...author.getInputProps()}
          placeholder="Frodo Baggins"
          required
          data-testid="Author-Input"
        />
        <label htmlFor="url">URL</label>
        <input
          {...url.getInputProps()}
          placeholder="https://yourblogdomain.com/yourblogpath"
          required
          data-testid="URL-Input"
        />
        <button
          id="create-blog"
          type="submit"
          data-testid="Create-Button"
        >
          create
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
