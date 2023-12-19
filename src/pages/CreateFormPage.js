import { useEffect } from "react";
import CreateForm from "../components/create-form/CreateForm";

const CreateFormPage = () => {
  useEffect(() => {
    document.title = "Create Forms - FormBuilder";
  }, []);
  return (
    <>
      <CreateForm />
    </>
  );
};
export default CreateFormPage;
