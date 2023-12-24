import { useContext, useReducer, useState } from "react";
import classes from "./CreateForm.module.css";
import CreateFormMetaData from "./CreateFormMetaData";
import FormQuestionBox from "./FormQuestionBox";
import { formPostRequest } from "../../store/send-form-request";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

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
  } else if (action.type === "update-options") {
    const ques = state.find((q) => q.key === action.payload.quesKey);
    ques.options = action.payload.options;
    return state.map((q) => (q.key === action.payload.quesKey ? ques : q));
  } else {
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

const isOptionsValid = (options, type) => {
  if (type === "short" || type === "long") {
    return true;
  }
  if (options.filter((opt) => opt.text === "").length === 0) {
    return true;
  } else {
    return false;
  }
};

const isQuestionValid = (ques) => {
  if (ques.question !== "" && isOptionsValid(ques.options, ques.type)) {
    return true;
  } else {
    return false;
  }
};

const isQuestionsValid = (questions) => {
  if (questions.length === 0) {
    return false;
  }
  return questions.filter((ques) => !isQuestionValid(ques)).length === 0;
};

const CreateForm = () => {
  const [questionsState, dispatch] = useReducer(reducerFunction, initialState);
  const [metaData, setMetaData] = useState({});
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [isRequestSending, setRequestSending] = useState(false);

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
    const formData = {
      ...metaData,
      id: Date.now().toString(),
      questions: questionsState,
    };
    if (
      formData.title &&
      formData.description &&
      isQuestionsValid(formData.questions) &&
      !isRequestSending
    ) {
      formPostRequest(formData, authContext.jwtToken, navigate, setRequestSending, authContext.logout);
    } else {
      alert(
        "All fields must not be empty and there must be atleast one question"
      );
    }
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
            {isRequestSending ? (
              <i className="fa-solid fa-spinner fa-spin fa-xl"></i>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
      <button className={classes["add-question-btn"]} onClick={addQuestion}>
        <i className="fa-solid fa-plus fa-2xl"></i>
      </button>
    </div>
  );
};

export default CreateForm;
