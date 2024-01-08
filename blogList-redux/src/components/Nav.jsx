import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavBar } from "./styles/NavStyle";

const Nav = ({ handleLogout }) => {
  const loggedUser = useSelector((state) => state.loggedUser);

  return (
    <NavBar>
      <div>
        <Link to={"/"} style={{ padding: "0.5em" }}>
          blogs
        </Link>
        <Link to={"/users"} style={{ padding: "0.5em" }}>
          users
        </Link>
      </div>
      <div>
        <p>Logged as user: {loggedUser.username} </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </NavBar>
  );
};

export default Nav;
