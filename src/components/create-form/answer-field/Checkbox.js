import { useState } from "react";
import classes from "./MultiOptionStyling.module.css";

const Checkbox = (props) => {
  const [options, setOptions] = useState([
    { key: Date.now().toString(), text: "" },
  ]);

  const addOption = () => {
    setOptions((prevState) => {
      return [...prevState, { key: Date.now().toString(), text: "" }];
    });
  };

  const inputOption = (e) => {
    const mykey = e.target.getAttribute("mykey");
    setOptions((prevState) => {
      const newArray = prevState.map((opt) =>
        opt.key === mykey ? { key: opt.key, text: e.target.value } : opt
      );
      props.dispatch({
        type: "update-options",
        payload: { quesKey: props.quesKey, options : newArray },
      });
      return newArray;
    });
  };

  const removeOption = (mykey) => {
    setOptions((prevState) =>
      prevState.filter((option) => option.key !== mykey)
    );
  };

  return (
    <div className={classes.container}>
      {options.map((option) => (
        <div key={option.key} className={classes["option-div"]}>
          <i
            className="fa-regular fa-square fa-sm"
            style={{ color: "gray" }}
          ></i>
          <input
            onChange={inputOption}
            mykey={option.key}
            placeholder={`Option`}
          ></input>
          <i
            className={`${classes.crossBtn} fa-solid fa-xmark fa-lg`}
            onClick={() => removeOption(option.key)}
          ></i>
        </div>
      ))}
      <div className={classes["add-option-div"]}>
        <i className="fa-regular fa-square fa-sm" style={{ color: "gray" }}></i>
        <span className={classes["add-option-link"]} onClick={addOption}>
          Add Option
        </span>
      </div>
    </div>
  );
};
export default Checkbox;
