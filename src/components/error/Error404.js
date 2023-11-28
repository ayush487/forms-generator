import { useNavigate } from 'react-router-dom'
import Button from '../utility/Button'
import classes from './Error404.module.css'
const Error404 = () => {
  const navigate = useNavigate()
  const backHome = () => {
    navigate("/")
  }
  return (
    <div className={classes['error-container']}>
      <span>ERROR 404</span>
      <h1>Oops! Page not found.</h1>
      <p>Looks like the page you are looking for doesn’t exist.</p>
      <Button className={classes['error-btn']} onClick={backHome}>Back Home</Button>
    </div>
  )
}

export default Error404