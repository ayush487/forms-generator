import { useEffect } from "react";
import Error404 from "../components/error/Error404";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Not Found - FormBuilder"
  }, [])
  return (
    <Error404 />
  );
};

export default ErrorPage;
