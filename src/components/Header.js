import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
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
      ${headerDropped ? classes["header-dropped"] : ""}`}
    >
      <div className={classes["brand-logo"]}>
        <span onClick={goHome}>FormBuilder</span>
        <Button className={classes['mobile-getStarted-btn']}>Get Started</Button>
        {/* <i
          className={`fa-solid ${headerDropped ? 'fa-xmark' : 'fa-bars'} fa-xl ${classes["bars-btn"]}`}
          onClick={showDropdown}
        ></i> */}
      </div>
      <div className={classes["top-menu-options"]}>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/forms">Forms</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul> */}
        <Button className={classes['pc-getStarted-btn']}>Get Started</Button>
        
      </div>
    </header>
  );
};

export default Header;
