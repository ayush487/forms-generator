import { useNavigate } from "react-router-dom";
import Button from "../utility/Button";
import FormBox from "./FormBox";
import NoForm from "./NoForm";
import classes from "./YourForms.module.css";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import { allFormsGetRequest } from "../../store/send-form-request";
import LoadingSpinner from "../utility/LoadingSpinner";

const YourForms = (props) => {
  const authContext = useContext(AuthContext);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [forms, setForms] = useState([]);
  const create_form = () => {
    navigate("/create-form");
  };

  useEffect(() => {
    allFormsGetRequest(authContext.jwtToken, setForms, setLoading,navigate, authContext.logout);
  }, [authContext.jwtToken, setForms]);

  return (
    <div className={classes["your-form-container"]}>
      <div className={classes.heading}>
        <span className={classes["your-form-txt"]}>Your Forms</span>
        <Button className={classes["add-new-btn"]} onClick={create_form}>
          Add New
        </Button>
      </div>
      <hr />
      <div
        className={`${classes["form-list"]} ${
          isLoading ? classes["form-list-with-spinner"] : ""
        }`}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : forms.length === 0 ? (
          <NoForm />
        ) : (
          forms.map((formData) => (
            <FormBox
              formData={formData}
              key={formData.id}
              setAlert={props.setAlert}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default YourForms;
