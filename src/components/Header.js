import { Link } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  const switchTheme = (event) => {
    if(event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }
  return (
    <div className={classes.header}>
      <h3>FormBuilder</h3>
      <input type='checkbox' onChange={switchTheme}></input>Dark Mode
      <Link to='/'>Home</Link>
      <Link to='/forms'>Forms</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Header