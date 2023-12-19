import ReactDOM from "react-dom";
import classes from './Alert.module.css'

export const Box = (props) => {
  return (
    <div className={classes['alert-box']}>
      {props.children}
    </div>
  )
}

const Alert = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Box>{props.children}</Box>,
        document.getElementById("alert-root")
      )}
    </>
  );
};

export default Alert;
