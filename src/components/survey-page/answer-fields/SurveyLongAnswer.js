import classes from './SurveyFields.module.css'
const SurveyLongAnswer = () => {
  return (
    <div className={classes.container}>
      <span className={classes['long-answer-input']} contentEditable></span>
    </div>
  );
}
export default SurveyLongAnswer