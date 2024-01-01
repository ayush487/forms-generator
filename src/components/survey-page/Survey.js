import { useEffect, useState } from "react";
import classes from "./Survey.module.css";
import SurveyHeader from "./SurveyHeader";
import SurveyQuestion from "./SurveyQuestion";
import { formFillRequest, formGetRequest } from "../../store/send-form-request";
import Error404 from "../error/Error404";
import { useNavigate } from "react-router-dom";

const Survey = (props) => {
  const navigate = useNavigate()
  const [error, setError] = useState(false);
  const [responses, setResponses] = useState([]);
  const [responsesHasError, setResponsesHasError] = useState(false)
  const [isSubmitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    id: "",
    questions: [],
  });
  useEffect(() => {
    formGetRequest(props.formId, setFormData, setResponses, setError);
  }, [props.formId]);

  if (error) {
    return <Error404 />;
  }

  const isResponsesOk = (responses) => {
    return (
      responses.filter((res) => res.required && res.response.trim() === "")
        .length === 0
    );
  };

  const submitSurvey = (event) => {
    event.preventDefault();
    setResponsesHasError(false)
    if (isResponsesOk(responses)) {
      const formResponse = {
        formId: props.formId,
        responses: responses,
      };
      formFillRequest(formResponse,formData.title, setResponsesHasError, navigate, setSubmitting)
    } else {
      console.error("Responses are not valid");
      setTimeout(() => setResponsesHasError(true), 0)
    }
  };

  return (
    <div className={classes["survey-page"]}>
      <div className={classes["survey-container"]}>
        <form className={classes.form} onSubmit={submitSurvey}>
          <SurveyHeader
            title={formData.title}
            description={formData.description}
          />
          {formData.questions.map((question) => (
            <SurveyQuestion
              question={question}
              key={question.key}
              setResponse={setResponses}
              quesKey={question.key}
            />
          ))}
          <div className={classes["btn-container"]}>
            <button className={classes["submit-btn"]}>
            {isSubmitting ? (
              <i className="fa-solid fa-spinner fa-spin fa-xl"></i>
            ) : (
              "Submit"
            )}
            </button>
          </div>
        </form>
        <p className={responsesHasError ? classes['error-text'] : classes.hidden}>Please fill all the required fields.</p>
        <p className={classes['bottom-text']}>Never submit passwords in forms</p>
      </div>
    </div>
  );
};

export default Survey;

