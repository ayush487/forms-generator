import { useState } from "react";
import classes from "./ModalOverlay.module.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const ModalOverlay = (props) => {
  const [loginScreen, setLoginScreen] = useState(false);
  const setSigninPage = () => setLoginScreen(true);
  const setSignupPage = () => setLoginScreen(false);
  return (
    <div className={classes["modal-overlay"]}>
      <span className={classes["exit-btn"]} onClick={props.close}>
        <i className="fa-solid fa-xmark"></i>
      </span>
      <div className={classes.container}>
        <div className={classes["container__2"]}>
          <div className={classes["btn-container"]}>
            <div
              onClick={setSigninPage}
              className={`${classes.btn} 
            ${loginScreen ? classes.active : classes.inactive}`}
            >
              Sign In
            </div>
            <div
              onClick={setSignupPage}
              className={`${classes.btn} 
              ${loginScreen ? classes.inactive : classes.active}`}
            >
              Sign Up
            </div>
          </div>
          <div className={classes["form-container"]}>
            {loginScreen && <LoginForm signup={setSignupPage} />}
            {!loginScreen && <SignupForm signin={setSigninPage} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
// &#x2718;
