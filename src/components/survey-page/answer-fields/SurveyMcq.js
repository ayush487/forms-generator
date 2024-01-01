import classes from "./SurveyFields.module.css";
const SurveyMcq = (props) => {
  const handleClick = (e) => {
    props.setAnswer(e.target.value)
  }
  return (
    <div className={classes.container}>
      {props.options.map((option) => (
        <div key={option.key}>
          <input
            type="radio"
            name={props.questionId}
            id={option.key}
            className={classes.input}
            onInput={handleClick}
            value={option.text}
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
