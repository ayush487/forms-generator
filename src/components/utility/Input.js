import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes["input-container"]}>
      
      <input className={classes.input} placeholder={props.placeholder} type={props.type} />
      <span className={classes["input-symbol"]}>
        <i
          className={`fa-solid ${props.symbol} fa-lg `}
        ></i>
      </span>
    </div>
  );
};

export default Input;
