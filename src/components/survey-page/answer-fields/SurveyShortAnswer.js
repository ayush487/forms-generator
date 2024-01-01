import { useRef } from 'react';
import classes from './SurveyFields.module.css'
const SurveyShortAnswer = (props) => {
  const inputRef = useRef()
  const handleInput = () => {
    props.setAnswer(inputRef.current.value)
  }
  return (
    <div className={classes.container}>
      <input ref={inputRef} onInput={handleInput} className={classes['short-answer-input']} placeholder="Your answer"/>
    </div>
  );
}
export default SurveyShortAnswer