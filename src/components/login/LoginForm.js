import { useContext } from "react";
import Input from "../utility/Input";
import SubmitButton from "../utility/SubmitButton";
import classes from "./Form.module.css";
import AuthContext from "../../store/auth-context";
import { useState } from "react";
import { loginRequest } from "../../store/send-request";
import Alert from "../utility/Alert";

const LoginForm = (props) => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setLoggingIn] = useState(false);
  const [error, setError] = useState(null);
  
  // const showAlert = () => {
  //   setAlert('Login Successfully!')
  //   setTimeout(() => setAlert(null), 5000)
  // }
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const signin = (event) => {
    event.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      return;
    }
    loginRequest(
      email,
      password,
      setLoggingIn,
      authContext.login,
      setError,
      props.close,
      props.setAlert
    );
  };
  const changePage = () => {
    props.signup();
  };
  return (
    <form className={classes.form} onSubmit={signin}>
      <Input
        placeholder="E-mail"
        symbol="fa-at"
        type="email"
        value={email}
        onChange={changeEmailHandler}
        className={error ? classes.errorInput : classes.inputBorder}
      />
      <Input
        placeholder="Password"
        symbol="fa-lock"
        type="password"
        value={password}
        className={error ? classes.errorInput : classes.inputBorder}
        onChange={changePasswordHandler}
      />
      <div className={classes["fgt-container"]}>
        <div>
          <input type="checkbox" style={{ cursor: "pointer" }} defaultChecked />
          Remember Me
        </div>
        <div className={classes["fgt-div"]}>Forget Password</div>
      </div>
      {error && <p className={classes.errorText}>{error}</p>}
      <SubmitButton>
        {isLoggingIn ? (
          <i className="fa-solid fa-spinner fa-spin fa-xl"></i>
        ) : (
          "Sign In"
        )}
      </SubmitButton>
      <div className={classes["modal-bottom-text"]}>
        Not a user? <span onClick={changePage}>Sign up</span>
      </div>
    </form>
  );
};
export default LoginForm;
