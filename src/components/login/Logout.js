import { useContext } from "react";
import classes from "./Logout.module.css";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()
  const logout = () => {
    authContext.logout()
    navigate("/")
  }
  return (
    <div className={classes["logout-container"]}>
      <h1>Logout Confirmation</h1>
      <p>Are you sure you want to logout?</p>
      <button className={classes.sureBtn} onClick={logout}>Yes, Logout</button>
      <button className={classes.cancelBtn} onClick={() => navigate(-1)}>Cancel</button>
    </div>
  );
};

export default Logout