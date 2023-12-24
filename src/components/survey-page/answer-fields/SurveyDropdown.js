import { useState } from "react";
import classes from "./SurveyFields.module.css";

const SurveyDropdown = (props) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [answer, setAnswer] = useState(null)
  const handleClick = (text) => {
    setAnswer(text)
    setDropdownActive(false)
  }
  const setAnswerNull = () => {
    setAnswer(null)
    setDropdownActive(false)
  }
  return (
    <div className={classes.container}>
      <span
        className={classes["dropdown-input"]}
        onClick={() => setDropdownActive(true)}
      >
        {answer ? answer : "Choose"}
      </span>
      <span className={classes.dropSymbol}>
        <i className="fa-solid fa-caret-down"></i>
      </span>
      {dropdownActive && (
        <div className={classes["options-container"]}>
          <div className={classes.chooseBtn} onClick={setAnswerNull}>Choose</div>
          <div className={classes.options}>
            {props.options.map((option) => (
              <span key={option.key} onClick={() => handleClick(option.text)}>{option.text}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default SurveyDropdown;
