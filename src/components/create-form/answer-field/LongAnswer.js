import classes from './TextAnswer.module.css'
const LongAnswer = () => {
  return (
    <div className={`${classes.container} ${classes.long}`}>
      Long-answer text
    </div>
  )
}
export default LongAnswer