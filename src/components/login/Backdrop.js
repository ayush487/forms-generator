import classes from './Backdrop.module.css'

const Backdrop = props => {
  return <div className={classes['backdrop-overlay']} onClick={props.onClick}></div>;
};

export default Backdrop;
