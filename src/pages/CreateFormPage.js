import { useEffect } from "react";
import CreateForm from "../components/create-form/CreateForm";

const CreateFormPage = () => {
  useEffect(() => {
    document.title = "Create Forms - FormBuilder";
    window.scrollTo(0,0)
  }, []);
  return (
    <>
      <CreateForm />
    </>
  );
};
export default CreateFormPage;
