import { useEffect } from "react";
import { useParams } from "react-router-dom";

const FormsPage = () => {
  const params = useParams()
  useEffect(() => {
    document.title = "Name - FormBuilder"
  }, [])
  return <>This Form Id is {params.formId}</>;
};

export default FormsPage;
