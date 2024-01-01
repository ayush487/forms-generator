import classes from "./SurveyFields.module.css";

const SurveyCheckbox = (props) => {

  const handleInput = (e) => {
    const isChecked = e.target.checked;
    props.setAnswer((prevState) => {
      if (isChecked) {
        return [...prevState, e.target.value];
      } else {
        return prevState.filter((answer) => answer !== e.target.value);
      }
    });
  };

  return (
    <div className={classes.container}>
      {props.options.map((option) => (
        <div key={option.key}>
          <input
            type="checkbox"
            name="que3"
            id={option.key}
            className={classes.input}
            value={option.text}
            onInput={handleInput}
          />
          <label htmlFor={option.key} className={classes.label}>
            {option.text}
          </label>
        </div>
      ))}
    </div>
  );
};
export default SurveyCheckbox;
