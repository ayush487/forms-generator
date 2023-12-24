import classes from './SurveyFields.module.css'
const SurveyShortAnswer = () => {
  return (
    <div className={classes.container}>
      <input className={classes['short-answer-input']} placeholder="Your answer"/>
    </div>
  );
}
export default SurveyShortAnswer