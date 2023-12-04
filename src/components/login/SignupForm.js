import { useState } from "react";
import Input from "../utility/Input";
import SubmitButton from "../utility/SubmitButton";
import classes from "./Form.module.css";
import { signupRequest } from "../../store/send-auth-request";

const SignupForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSigningUp, setSigningUp] = useState(false);
  const changeNameHandler = (event) => {
    setName(event.target.value);
  };
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const signup = (event) => {
    event.preventDefault();
    if (email.trim() === "" || password.trim() === "" || name.trim() === "") {
      return;
    }
    signupRequest({ email, password }, setSigningUp, setError, props.signin,props.setAlert);
    console.log(`Email : ${email}\nPassword : ${password}\nName : ${name}`);
  };
  const changePage = () => {
    props.signin();
  };
  return (
    <form className={classes.form} onSubmit={signup}>
      <Input
        placeholder="Name"
        symbol="fa-user"
        type="text"
        value={name}
        className={error ? classes.errorInput : classes.inputBorder}
        onChange={changeNameHandler}
      />
      <Input
        placeholder="E-mail"
        symbol="fa-at"
        type="email"
        value={email}
        className={error ? classes.errorInput : classes.inputBorder}
        onChange={changeEmailHandler}
      />
      <Input
        placeholder="Password"
        symbol="fa-lock"
        type="password"
        value={password}
        className={error ? classes.errorInput : classes.inputBorder}
        onChange={changePasswordHandler}
      />
      {error && <p className={classes.errorText}>{error}</p>}
      <SubmitButton>
        {isSigningUp ? <i className="fa-solid fa-spinner fa-spin fa-xl"></i> : "Sign Up"}
      </SubmitButton>
      <div className={classes["modal-bottom-text"]}>
        Already a user? <span onClick={changePage}>Sign in</span>
      </div>
    </form>
  );
};
export default SignupForm;
