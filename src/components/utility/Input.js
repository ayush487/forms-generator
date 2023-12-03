import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes["input-container"]}>
      
      <input
        value={props.value}
        className={`${props.className} ${classes.input} `}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
      />
      
      <span className={classes["input-symbol"]}>
        <i className={`fa-solid ${props.symbol} fa-lg `}></i>
      </span>
      
    </div>
  );
};

export default Input;
