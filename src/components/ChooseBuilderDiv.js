import classes from './ChooseBuilderDiv.module.css'

const ChooseBuilderDiv = () => {
  return (
    <div className={classes['choose-builder-div']}>
      <h1>Why Choose FormBuilder?</h1>
      <iframe
        src="https://www.youtube.com/embed/TIHG4zwUMFY?modestbranding=1"
      ></iframe>
    </div>
  );
};

export default ChooseBuilderDiv;
