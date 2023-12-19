import { useNavigate } from "react-router-dom";
import Button from "../utility/Button";
import FormBox from "./FormBox";
import NoForm from "./NoForm";
import classes from "./YourForms.module.css";

const forms = [
  {
    id: 101,
    title: "My Form",
    description:
      "Collecting data to sell on dark web data to sell on dark web data to sell on dark web data to sell on dark web data to sell on dark web data to sell on dark web data to sell on dark web data to sell on dark web ",
  },
  {
    id: 102,
    title: "My Second Form",
    description: "Collecting data to engage with public",
  },
  {
    id: 103,
    title: "My College Form",
    description: "Surveying for college project",
  },
  {
    id: 104,
    title: "My Form",
    description: "Collecting data to sell on dark web",
  },
];

const YourForms = (props) => {
  const navigate = useNavigate();
  const create_form = () => {
    navigate("/create-form");
  };
  return (
    <div className={classes["your-form-container"]}>
      <div className={classes.heading}>
        <span className={classes["your-form-txt"]}>Your Forms</span>
        <Button className={classes["add-new-btn"]} onClick={create_form}>
          Add New
        </Button>
      </div>
      <hr />
      <div className={classes["form-list"]}>
        {forms.length === 0 && <NoForm />}
        {forms.map((formData) => (
          <FormBox formData={formData} key={formData.id} setAlert={props.setAlert}  />
        ))}
      </div>
    </div>
  );
};
export default YourForms;
