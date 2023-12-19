import classes from "./FormBox.module.css";

const FormBox = (props) => {
  const copyFormLink = () => {
    window.navigator.clipboard.writeText(
      window.location.origin + "/fill-form/" + props.formData.id
    );
    props.setAlert("Link Copied");
    setTimeout(() => props.setAlert(null), 500);
  };

  return (
    <div className={classes["form-box"]}>
      <div className={classes["content-container"]}>
        <span className={classes["form-title"]}>{props.formData.title}</span>
        <p className={classes["form-description"]}>
          {props.formData.description}
        </p>
        <p className={classes["response-link"]}>
          <a
            href={`/responses/${props.formData.id}`}
            target="_blank"
            rel="noreferrer"
          >
            View responses
          </a>
        </p>
      </div>
      <div className={classes["link-container"]}>
        <span title="Copy Form Link" onClick={copyFormLink}>
          <i className="fa-regular fa-clipboard fa-lg"></i>
        </span>
        <a
          target="_blank"
          href={`/forms/${props.formData.id}`}
          rel="noreferrer"
          className={classes.link}
          title="Link to the form"
        >
          <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
        </a>
      </div>
    </div>
  );
};
export default FormBox;
