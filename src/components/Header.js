import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import Button from "./Button";
import { useContext, useState } from "react";
import AuthContext from "../store/auth-context";

const Header = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [headerDropped, setHeaderDropped] = useState(false);
  const goHome = () => {
    navigate("/");
  };
  const showDropdown = () => {
    setHeaderDropped((prevState) => !prevState);
  };

  return (
    <header
      className={`${classes.header} 
      ${
        headerDropped && authContext.isLoggedIn ? classes["header-dropped"] : ""
      }`}
    >
      <div className={classes["brand-logo"]}>
        <span onClick={goHome}>FormBuilder</span>
        {!authContext.isLoggedIn && (
          <Button className={classes["mobile-getStarted-btn"]}>
            Get Started
          </Button>
        )}
        {authContext.isLoggedIn && (
          <i
            className={`fa-solid ${
              headerDropped ? "fa-xmark" : "fa-bars"
            } fa-xl ${classes["bars-btn"]}`}
            onClick={showDropdown}
          ></i>
        )}
      </div>
      <div className={classes["top-menu-options"]}>
        {authContext.isLoggedIn && (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/forms">Forms</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        )}
        {!authContext.isLoggedIn && (
          <Button className={classes["pc-getStarted-btn"]}>Get Started</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
