import classes from "./SurveyQuestion.module.css";
import SurveyCheckbox from "./answer-fields/SurveyCheckbox";
import SurveyDropdown from "./answer-fields/SurveyDropdown";
import SurveyLongAnswer from "./answer-fields/SurveyLongAnswer";
import SurveyMcq from "./answer-fields/SurveyMcq";
import SurveyShortAnswer from "./answer-fields/SurveyShortAnswer";

const SurveyQuestion = (props) => {
  const getAnswerField = () => {
    if (props.question.type === "mcq") {
      return <SurveyMcq options={props.question.options} />;
    } else if (props.question.type === "dropdown") {
      return <SurveyDropdown options={props.question.options} />;
    } else if (props.question.type === "checkbox") {
      return <SurveyCheckbox options={props.question.options} />;
    } else if (props.question.type === "short") {
      return <SurveyShortAnswer />;
    } else if (props.question.type === "long") {
      return <SurveyLongAnswer />;
    }
  };
  return (
    <div className={classes.container}>
      <div>
        {props.question.question}
        {props.question.isRequired && <span className={classes['required-symbol']}>*</span>}
      </div>
      {getAnswerField()}
    </div>
  );
};

export default SurveyQuestion;
