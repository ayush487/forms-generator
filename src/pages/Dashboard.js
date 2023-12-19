import { useEffect } from "react";
import YourForms from "../components/forms/YourForms";

const Dashboard = props => {
  useEffect(() => {
    document.title = "Dashboard - FormBuilder"
  }, [])
  return (
    <YourForms setAlert={props.setAlert} />
  )
};

export default Dashboard;
