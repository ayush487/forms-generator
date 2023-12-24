import classes from "./SurveyFields.module.css";
const SurveyMcq = (props) => {
  return (
    <div className={classes.container}>
      {props.options.map((option) => (
        <div key={option.key}>
          <input
            type="radio"
            name="que1"
            id={option.key}
            className={classes.input}
          />
          <label htmlFor={option.key} className={classes.label}>
            {option.text}
          </label>
        </div>
      ))}
    </div>
  );
};
export default SurveyMcq;
