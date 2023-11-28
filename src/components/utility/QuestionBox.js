import { useState } from "react";
import classes from "./QuestionBox.module.css";
const QuestionBox = (props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded((prevState) => !prevState);
  };
  return (
    <div className={classes["question-box"]}>
      <div className={classes.question}>
        <span className={classes.paragraph}>{props.ques}</span>
        <span className={classes["expand-btn"]} onClick={toggleExpand}>
          <i className={`fa-solid ${expanded ? "fa-minus" : "fa-plus"}`}></i>
        </span>
      </div>
      <div className={`${classes.answer} ${expanded ? "" : classes.hidden}`}>
        {props.ans}
      </div>
    </div>
  );
};
export default QuestionBox;
