import { useContext, useEffect, useState } from "react";
import { responseRequest } from "../../store/send-response-request";
import AuthContext from "../../store/auth-context";
import classes from "./FormResponse.module.css";
import exportFromJSON from "export-from-json";
import Button from "../utility/Button";
import LoadingSpinner from "../utility/LoadingSpinner";

const FormResponses = (props) => {
  const [formData, setFormData] = useState(null);
  const [responses, setResponses] = useState(null);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    responseRequest(
      authContext.jwtToken,
      props.formId,
      setFormData,
      setResponses
    );
  }, []);

  const exportResponses = () => {
    const questionData = {};
    formData.questions.forEach((element) => {
      questionData[element.key] = element.question;
    });
    const responseInCsv = responses.map((res) => {
      const singleResponseObject = {};
      res.responses.forEach((r1) => {
        singleResponseObject[questionData[r1.questionId]] = r1.response;
      });
      return singleResponseObject;
    });

    const exportType = exportFromJSON.types.csv;
    const fileName = formData.title + "_responses";
    exportFromJSON({ data: responseInCsv, fileName, exportType });
  };

  return (
    <div>
      {formData && responses ? (
        <>
          <div className={classes["header-container"]}>
            <h3>{formData.title} (Responses)</h3>

            <Button className={classes.btn} onClick={exportResponses}>
              <i className="fa-solid fa-download"></i>EXPORT
            </Button>
          </div>
          <div className={classes["table-container"]}>
            <table border="1px" className={classes.table}>
              <thead>
                <tr>
                  <th>S. No</th>
                  {formData.questions.map((q) => (
                    <th key={q.key}>{q.question}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {responses.map((response, i) => (
                  <tr key={response.id}>
                    <td>{i + 1}</td>
                    {response.responses.map((r) => (
                      <td key={r.questionId}>{r.response}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div style={{display : 'flex', justifyContent : 'center'}}>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default FormResponses;
