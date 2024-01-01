import { Link } from "react-router-dom";
import classes from "./SubmitContainer.module.css";

const SubmitContainer = (props) => {
  const title = window.atob(props.title)
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>{title}</h1>
        <p>Your response has been recorded</p>
        <Link to={"/forms/" + props.formId} className={classes.link}>Submit another response</Link>
      </div>
    </div>
  );
};
export default SubmitContainer;
