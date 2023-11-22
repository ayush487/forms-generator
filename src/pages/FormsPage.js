import { useParams } from "react-router-dom";

const FormsPage = () => {
  const params = useParams()
  return <>This Form Id is {params.formId}</>;
};

export default FormsPage;
