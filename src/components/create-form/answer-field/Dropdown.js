import { useState } from "react";
import classes from "./MultiOptionStyling.module.css";

const Dropdown = () => {
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
      return prevState.map((opt) =>
        opt.key === mykey ? { key: opt.key, text: e.target.value } : opt
      );
    });
  };

  const removeOption = (mykey) => {
    setOptions((prevState) =>
      prevState.filter((option) => option.key !== mykey)
    );
  };

  return (
    <div className={classes.container}>
      {options.map((option, i) => (
        <div key={option.key} className={classes["option-div"]}>
          <span className={classes.serialNumber}>{`${i + 1}.`}</span>
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
        <span>{`${options.length + 1}.`}</span>
        <span className={classes["add-option-link"]} onClick={addOption}>
          Add Option
        </span>
      </div>
    </div>
  );
};
export default Dropdown;
