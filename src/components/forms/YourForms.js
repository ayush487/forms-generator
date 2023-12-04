import Button from "../utility/Button";
import FormBox from "./FormBox";
import classes from "./YourForms.module.css";

const forms = [
  {
    id: 101,
    title: "My Form",
    description: "Collecting data to sell on dark web",
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

const YourForms = () => {
  return (
    <div className={classes["your-form-container"]}>
      <div className={classes.heading}>
        <span className={classes["your-form-txt"]}>Your Forms</span>
        <Button className={classes["add-new-btn"]}>Add New</Button>
      </div>
      <hr />
      <div className={classes["form-list"]}>
        {forms.map((formData) => (
          <FormBox formData={formData} key={formData.id} />
        ))}
      </div>
    </div>
  );
};
export default YourForms;
