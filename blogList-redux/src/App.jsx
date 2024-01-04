import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeBlogs } from "./reducers/blogsReducer";
import { clearUser, setUser } from "./reducers/userReducer";
import blogService from "./services/blogs";
import BlogList from "./components/BlogList";
import LoginForm from "./components/loginForm";
import BlogForm from "./components/BlogForm";
import Togglable from "./components/Togglable";
import Notification from "./components/Notification";
import "./style.css";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const blogFormRef = useRef();

  useEffect(() => {
    const loggedUserJSON =
      window.localStorage.getItem("loggedBlogApp");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(setUser(user));
      blogService.setToken(user.token);
    }
  }, [dispatch]);

  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogApp");
    dispatch(clearUser());
  };

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  if (user === null) {
    return (
      <div>
        <h1>LogIn to App</h1>
        <LoginForm />
      </div>
    );
  }

  return (
    <div className="content">
      <h1 className="title">BlogList App</h1>
      <Notification />
      <div className="logged-user">
        <p>Logged as user: {user.username} </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Togglable
        buttonLabel="new blog"
        closeButtonLabel="cancel"
        ref={blogFormRef}
      >
        <BlogForm blogFormRef={blogFormRef} />
      </Togglable>
      <BlogList />
    </div>
  );
}

export default App;
