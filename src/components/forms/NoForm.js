import classes from './NoForm.module.css'
import Button from "../utility/Button"
import { useNavigate } from 'react-router-dom'

const NoForm = () => {
  const navigate = useNavigate()
  const create_form = () => {
    navigate("/create-form")
  }
  return (
    <div>
      <h1 style={{color : 'var(--tertiary-font-color)'}}>You haven't created any forms yet!</h1>
      <Button className={classes.btn} onClick={create_form}>Create Form</Button>
    </div>
  )
}
export default NoForm