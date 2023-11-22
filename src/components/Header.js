import { Link } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
      FORMS

      <Link to='/'>Home</Link>
      <Link to='/forms'>Forms</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Header