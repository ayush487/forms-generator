import { useEffect } from "react";
import YourForms from "../components/forms/YourForms";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - FormBuilder"
  }, [])
  return (
    <YourForms />
  )
};

export default Dashboard;
