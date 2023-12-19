import { useRef } from "react";
import classes from "./CreateFormMetaData.module.css";

const CreateFormMetaData = (props) => {
  const titleRef = useRef();
  const descRef = useRef();

  const setTitleDesc = () => {
    props.setData({
      title: titleRef.current.textContent,
      description: descRef.current.textContent,
    });
  }

  return (
    <div className={`${classes.container}`}>
      <span
        ref={titleRef}
        contentEditable="true"
        className={classes.title}
        onInput={setTitleDesc}
      ></span>
      <span
        ref={descRef}
        contentEditable="true"
        className={classes.description}
        onInput={setTitleDesc}
      ></span>
    </div>
  );
};
export default CreateFormMetaData;
