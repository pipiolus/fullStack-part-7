import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeBlogs } from "./reducers/blogsReducer";
import { clearUser, setUser } from "./reducers/loggedUserReducer";
import { initializeUsers } from "./reducers/usersReducer";
import blogService from "./services/blogs";
import { Routes, Route, useMatch } from "react-router-dom";
import LoginForm from "./components/loginForm";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import Blog from "./components/Blog";
import Togglable from "./components/Togglable";
import Notification from "./components/Notification";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Nav from "./components/Nav";
import "./style.css";

function App() {
  const loggedUser = useSelector((state) => state.loggedUser);
  const users = useSelector((state) => state.users);
  const blogs = useSelector((state) => state.blogs);

  const dispatch = useDispatch();
  const blogFormRef = useRef();
  const userMatch = useMatch("/users/:id");
  const blogMatch = useMatch("/blogs/:id");

  const user = userMatch
    ? users.find((u) => u.id === userMatch.params.id)
    : null;

  const blog = blogMatch
    ? blogs.find((blog) => blog.id === blogMatch.params.id)
    : null;

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(initializeUsers());
  }, [dispatch]);

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

  if (loggedUser === null) {
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
      <Nav handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Togglable
                buttonLabel="new blog"
                closeButtonLabel="cancel"
                ref={blogFormRef}
              >
                <BlogForm blogFormRef={blogFormRef} />
              </Togglable>
              <BlogList />
            </>
          }
        />
        <Route
          path="/blogs/:id"
          element={<Blog blog={blog} blogs={blogs} />}
        />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<User user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
