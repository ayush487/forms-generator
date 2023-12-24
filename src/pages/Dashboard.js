import { useEffect } from "react";
import YourForms from "../components/forms/YourForms";

const Dashboard = props => {
  useEffect(() => {
    document.title = "Dashboard - FormBuilder"
    window.scrollTo(0,0)
  }, [])
  return (
    <YourForms setAlert={props.setAlert} />
  )
};

export default Dashboard;
