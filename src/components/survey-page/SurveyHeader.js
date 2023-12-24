import classes from "./SurveyHeader.module.css";
const SurveyHeader = (props) => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>{props.title}</span>
      <span className={classes.description}>{props.description}</span>
      <span className={classes.ruling}></span>
      <span className={classes.note}>* Indicates required question</span>
    </div>
  );
};
export default SurveyHeader;
