import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Survey from "../components/survey-page/Survey";

const SurveyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const params = useParams();
  return (
    <>
      <Survey formId={params.formId} />
    </>
  );
};
export default SurveyPage;
