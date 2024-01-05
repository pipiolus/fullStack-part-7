import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = ({ handleLogout }) => {
  const loggedUser = useSelector((state) => state.loggedUser);
  const style = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#d1d5db",
  };

  return (
    <nav style={style}>
      <Link to={"/"} style={{ padding: "0.5em" }}>
        blogs
      </Link>
      <Link to={"/users"} style={{ padding: "0.5em" }}>
        users
      </Link>
      <p>Logged as user: {loggedUser.username} </p>
      <button
        style={{ height: "2em", marginLeft: "0.5em" }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default Nav;
