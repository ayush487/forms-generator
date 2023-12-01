import classes from './SubmitButton.module.css'

const SubmitButton = props => {
  return (
    <div className={classes['submit-btn-container']}>
      <button>{props.children}</button>
    </div>
  )
}

export default SubmitButton