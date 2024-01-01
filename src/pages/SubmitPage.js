import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SubmitContainer from "../components/survey-page/SubmitContainer";

const SubmitPage = () => {
  useEffect(() => {
    document.title = "Response Submitted - FormBuilder"
    window.scrollTo(0,0)
  }, [])
  const params = useParams();
  return (
    <SubmitContainer formId={params.formId} title={params.title} />
  )
}
export default SubmitPage