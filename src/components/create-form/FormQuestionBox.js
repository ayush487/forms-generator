import { useRef, useState } from "react";
import classes from "./FormQuestionBox.module.css";
import MCQ from "./answer-field/MCQ";
import Checkbox from "./answer-field/Checkbox";
import Dropdown from "./answer-field/Dropdown";
import ShortAnswer from "./answer-field/ShortAnswer";
import LongAnswer from "./answer-field/LongAnswer";

const FormQuestionBox = (props) => {
  const options = [
    { value: "mcq", text: "Multiple Choice" },
    { value: "checkbox", text: "Check Boxes" },
    { value: "dropdown", text: "Drop-down" },
    { value: "short", text: "Short Answer" },
    { value: "long", text: "Paragraph" },
  ];
  const [isRequired, setRequired] = useState(false);
  const optionRef = useRef();
  const selectOptionType = (event) => {
    props.dispatch({
      type: "update-question-type",
      payload: { key: props.mykey, type: event.target.value },
    });
  };

  const toggleRequired = () => {
    props.dispatch({
      type: "set-required",
      payload: { key: props.mykey, isRequired: !isRequired },
    });
    setRequired((prevState) => {
      return !prevState;
    });
  };
  const setQuestionData = (e) => {
    props.dispatch({
      type: "update-question-text",
      payload: { key: props.mykey, updatedQuestion: e.target.textContent },
    });
  };

  const deleteQuestion = () => {
    props.dispatch({
      type: "delete-question",
      payload: { key: props.mykey },
    });
  };

  const getFieldType = (element) => {
    if (element) {
      const val = element.value;
      if (val === "mcq") {
        return <MCQ dispatch={props.dispatch} quesKey={props.mykey} />;
      } else if (val === "dropdown") {
        return <Dropdown dispatch={props.dispatch} quesKey={props.mykey} />;
      } else if (val === "checkbox") {
        return <Checkbox dispatch={props.dispatch} quesKey={props.mykey} />;
      } else if (val === "short") {
        return <ShortAnswer dispatch={props.dispatch} quesKey={props.mykey} />;
      } else if (val === "long") {
        return <LongAnswer dispatch={props.dispatch} quesKey={props.mykey} />;
      }
    } else {
      return <MCQ dispatch={props.dispatch} quesKey={props.mykey} />;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes["question-data"]}>
        <p
          className={classes.question}
          contentEditable
          onInput={setQuestionData}
        ></p>
        <select
          className={classes.select}
          onChange={selectOptionType}
          ref={optionRef}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      {getFieldType(optionRef.current)}

      <div className={classes["question-menu"]}>
        <span style={{ cursor: "pointer" }}>
          <i
            title="Delete"
            className="fa-regular fa-trash-can fa-lg"
            onClick={deleteQuestion}
          ></i>
        </span>
        <span>
          Required{" "}
          <i
            style={{ cursor: "pointer" }}
            title={isRequired ? "Required" : "Not Required"}
            className={`fa-solid fa-xl ${
              isRequired ? "fa-toggle-on" : "fa-toggle-off"
            }`}
            onClick={toggleRequired}
          ></i>
        </span>
      </div>
    </div>
  );
};
export default FormQuestionBox;
