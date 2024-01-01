import { useRef } from 'react';
import classes from './SurveyFields.module.css'
const SurveyLongAnswer = (props) => {
  const fieldRef = useRef()
  const handleInput = () => {
    props.setAnswer(fieldRef.current.textContent)
  }
  return (
    <div className={classes.container}>
      <span ref={fieldRef} className={classes['long-answer-input']} contentEditable onInput={handleInput}></span>
    </div>
  );
}
export default SurveyLongAnswer