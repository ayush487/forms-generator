import { useReducer, useState } from "react";
import classes from "./CreateForm.module.css";
import CreateFormMetaData from "./CreateFormMetaData";
import FormQuestionBox from "./FormQuestionBox";

const reducerFunction = (state, action) => {
  if (action.type === "add-question") {
    return [...state, action.payload];
  } else if (action.type === "update-question-text") {
    const ques = state.find((q) => q.key === action.payload.key);
    ques.question = action.payload.updatedQuestion;
    return state.map((q) => (q.key === action.payload.key ? ques : q));
  } else if (action.type === "update-question-type") {
    const ques = state.find((q) => q.key === action.payload.key);
    const updatedQuest = { ...ques, type: action.payload.type };
    return state.map((q) => (q.key === action.payload.key ? updatedQuest : q));
  } else if (action.type === "delete-question") {
    return state.filter((q) => q.key !== action.payload.key);
  } else if (action.type === "set-required") {
    const ques = state.find((q) => q.key === action.payload.key);
    ques.isRequired = action.payload.isRequired;
    return state.map((q) => (q.key === action.payload.key ? ques : q));
  } else if(action.type === "update-options") {
    const ques = state.find((q) => q.key === action.payload.quesKey);
    ques.options = action.payload.options
    return state.map((q) => (q.key === action.payload.quesKey ? ques : q));
  }
   else {
    return state;
  }
};
const initialState = [
  {
    key: Date.now().toString(),
    type: "mcq",
    question: "",
    options: [],
    isRequired: false,
  },
];

const CreateForm = () => {
  const [questionsState, dispatch] = useReducer(reducerFunction, initialState);
  const [metaData, setMetaData] = useState({});

  const setData = (data) => {
    setMetaData(data);
  };
  const addQuestion = () => {
    dispatch({
      type: "add-question",
      payload: {
        key: Date.now().toString(),
        type: "mcq",
        question: "",
        options: [],
        isRequired: false,
      },
    });
  };
  const saveForm = () => {
    console.log({ ...metaData, questions: questionsState });
  };
  return (
    <div className={classes["create-form-page"]}>
      <div className={classes["create-form-container"]}>
        <CreateFormMetaData setData={setData} />
        {questionsState.map((question) => (
          <FormQuestionBox
            key={question.key}
            mykey={question.key}
            dispatch={dispatch}
          />
        ))}
        <div className={classes["options-container"]}>
          <button className={classes["save-btn"]} onClick={saveForm}>
            Save
          </button>
          <button className={classes["save-btn"]} onClick={addQuestion}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
