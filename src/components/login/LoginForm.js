import { useContext } from "react";
import Input from "../utility/Input";
import SubmitButton from "../utility/SubmitButton";
import classes from "./Form.module.css";
import AuthContext from "../../store/auth-context";

const LoginForm = (props) => {
  const authContext = useContext(AuthContext)
  const signin = (event) => {
    event.preventDefault()
    authContext.setLoggedIn(true);
    console.log(event)
  }
  const changePage = () => {
    props.signup()
  }
  return (
    <form className={classes.form} onSubmit={signin}>
      <Input placeholder="E-mail" symbol="fa-at" type="email" />
      <Input placeholder="Password" symbol="fa-lock" type="password" />
      <div className={classes['fgt-container']}>
        <div>
          <input type="checkbox" style={{cursor : 'pointer'}} />
          Remember Me
          </div>
        <div className={classes['fgt-div']}>Forget Password</div>
      </div>
      <SubmitButton>Sign In</SubmitButton>
      <div className={classes['modal-bottom-text']}>
        Not a user? <span onClick={changePage}>Sign up</span>
      </div>
    </form>
  );
};
export default LoginForm;
