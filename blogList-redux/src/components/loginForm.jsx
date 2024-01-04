import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userReducer";
import { setNotification } from "../reducers/notificationReducer";
import useField from "../hooks/useField";
import blogService from "../services/blogs";
import loginService from "../services/login";
import Notification from "./Notification";

const LoginForm = () => {
  const usernameField = useField("text");
  const passwordField = useField("password");

  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const username = usernameField.getInputProps().value;
      const password = passwordField.getInputProps().value;
      const user = await loginService.login({ username, password });
      dispatch(setUser(user));
      window.localStorage.setItem(
        "loggedBlogApp",
        JSON.stringify(user)
      );
      blogService.setToken(user.token);
      usernameField.clear();
      passwordField.clear();
    } catch (error) {
      dispatch(
        setNotification(
          "Wrong credentials: incorrect username or password",
          "error",
          3
        )
      );
      usernameField.clear();
      passwordField.clear();
    }
  };

  return (
    <div>
      <Notification />
      <form className="login-form" onSubmit={handleLogin}>
        username:
        <input
          className="login-input"
          {...usernameField.getInputProps()}
          required
        />
        password:
        <input
          className="login-input"
          {...passwordField.getInputProps()}
          required
        />
        <button className="login-btn" type="submit">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
