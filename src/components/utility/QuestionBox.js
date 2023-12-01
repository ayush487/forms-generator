import { useState } from "react";
import classes from "./QuestionBox.module.css";
const QuestionBox = (props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded((prevState) => !prevState);
  };
  const expand_for_mobile = () => {
    if(window.innerWidth <= 500) {
      toggleExpand()
    }
    return
  }
  return (
    <div className={classes["question-box"]} onClick={expand_for_mobile}>
      <div className={classes.question}>
        <span className={classes.paragraph}>{props.ques}</span>
        <span className={`${classes["expand-btn"]}  ${expanded ? classes.cross : ''}`} onClick={toggleExpand}> 
          <i className="fa-solid fa-plus"></i>
        </span>
      </div>
      <div className={`${classes.answer} ${expanded ? "" : classes.hidden}`}>
        {props.ans}
      </div>
    </div>
  );
};
export default QuestionBox;

