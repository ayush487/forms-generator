import { useEffect, useState } from "react";
import classes from "./SurveyQuestion.module.css";
import SurveyCheckbox from "./answer-fields/SurveyCheckbox";
import SurveyDropdown from "./answer-fields/SurveyDropdown";
import SurveyLongAnswer from "./answer-fields/SurveyLongAnswer";
import SurveyMcq from "./answer-fields/SurveyMcq";
import SurveyShortAnswer from "./answer-fields/SurveyShortAnswer";

const SurveyQuestion = (props) => {
  const initialAnswer = props.question.type === "checkbox" ? [] : "";
  const [answer, setAnswer] = useState(initialAnswer);
  useEffect(() => {
    props.setResponse((prevState) => {
      return prevState.map((state) => {
        if (state.questionId === props.quesKey) {
          return { questionId: props.quesKey, response: answer.toString(), required : state.required };
        } else {
          return state;
        }
      });
    });
  }, [answer]);
  const getAnswerField = () => {
    if (props.question.type === "mcq") {
      return (<SurveyMcq options={props.question.options} setAnswer={setAnswer} questionId={props.quesKey} />);
    } else if (props.question.type === "dropdown") {
      return (<SurveyDropdown options={props.question.options} setAnswer={setAnswer} />);
    } else if (props.question.type === "checkbox") {
      return ( <SurveyCheckbox options={props.question.options} setAnswer={setAnswer} answers={answer} />);
    } else if (props.question.type === "short") {
      return <SurveyShortAnswer setAnswer={setAnswer} />;
    } else if (props.question.type === "long") {
      return <SurveyLongAnswer setAnswer={setAnswer} />;
    }
  };
  return (
    <div className={classes.container}>
      <div>
        {props.question.question}
        {props.question.required && (
          <span className={classes["required-symbol"]}>*</span>
        )}
      </div>
      {getAnswerField()}
    </div>
  );
};

export default SurveyQuestion;
