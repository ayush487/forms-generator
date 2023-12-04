import classes from "./FormBox.module.css";

const FormBox = (props) => {
  return (
    <div className={classes["form-box"]}>
      <a target="_blank" href={`/forms/${props.formData.id}`} className={classes.link}>
        <i className="fa-solid fa-link fa-lg"></i>
      </a>
      <span className={classes['form-title']}>{props.formData.title}</span>
      <p className={classes['form-description']}>
      {props.formData.description}
      </p>
    </div>
  );
};
export default FormBox;
