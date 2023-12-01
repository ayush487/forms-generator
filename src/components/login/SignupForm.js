import Input from "../utility/Input";
import SubmitButton from "../utility/SubmitButton";
import classes from "./Form.module.css";

const SignupForm = (props) => {
  const signup = (event) => {
    event.preventDefault();
    console.log(event);
  };
  const changePage = () => {
    props.signin();
  };
  return (
    <form className={classes.form} onSubmit={signup}>
      <Input placeholder="E-mail" symbol="fa-at" type="email" />
      <Input placeholder="Password" symbol="fa-lock" type="password" />
      <Input placeholder="Confirm Password" symbol="fa-lock" type="password" />
      <SubmitButton>Sign Up</SubmitButton>
      <div className={classes["modal-bottom-text"]}>
        Already a user? <span onClick={changePage}>Sign in</span>
      </div>
    </form>
  );
};
export default SignupForm;
