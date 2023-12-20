import { useState } from "react";
import classes from "./FormQuestionBox.module.css";
import MCQ from "./answer-field/MCQ";
import Checkbox from "./answer-field/Checkbox";
import Dropdown from "./answer-field/Dropdown";
import ShortAnswer from "./answer-field/ShortAnswer";
import LongAnswer from "./answer-field/LongAnswer";

const answerTypeFields = {
  mcq: <MCQ />,
  checbox: <Checkbox />,
  dropdown: <Dropdown />,
  short: <ShortAnswer />,
  long: <LongAnswer />,
};

const FormQuestionBox = () => {
  const options = [
    { value: "mcq", text: "Multiple Choice" },
    { value: "checbox", text: "Check Boxes" },
    { value: "dropdown", text: "Drop-down" },
    { value: "short", text: "Short Answer" },
    { value: "long", text: "Paragraph" },
  ];
  const [answerType, setAnswerType] = useState("mcq");
  const [isRequired, setRequired] = useState(false);
  const selectOptionType = (e) => {
    setAnswerType(e.target.value);
    console.log(e.target.value);
  };

  const toggleRequired = () => {
    setRequired((prevState) => !prevState);
  };

  return (
    <div className={classes.container}>
      <div className={classes["question-data"]}>
        <p className={classes.question} contentEditable></p>
        <select
          className={classes.select}
          onChange={selectOptionType}
          value={answerType}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      {answerTypeFields[answerType]}
      <div className={classes["question-menu"]}>
        <span style={{ cursor: "pointer" }}>
          <i title="Delete" className="fa-regular fa-trash-can fa-lg"></i>
        </span>
        <span>
          Required{" "}
          <i
            style={{cursor : 'pointer'}}
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
