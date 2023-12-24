import classes from "./Survey.module.css";
import SurveyHeader from "./SurveyHeader";
import SurveyQuestion from "./SurveyQuestion";

const formData = {
  title: "The Social Media Survey",
  description:
    "We are collecting data about different people usage behaviour of social medias.",
};

const questions = [
  {
    key: "1703320688041",
    question: "Which app you can delete if you are offered $500 right now?",
    type: "mcq",
    options: [
      { key: "1703320734067", text: "Twitter" },
      { key: "1703320734037", text: "Facebook" },
      { key: "1703320734066", text: "Instagram" },
      { key: "1703320734069", text: "Discord" },
    ],
    isRequired: false,
  },
  {
    key: "1703320688042",
    question: "How many hours you spend daily on social media?",
    type: "dropdown",
    options: [
      { key: "239192382031", text: "0 - 1 hour" },
      { key: "239192382032", text: "2 - 4 hour" },
      { key: "239192382033", text: "5 - 8 hour" },
      { key: "239192382034", text: "8 hours or more" },
    ],
    isRequired: true,
  },
  {
    key: "1703320688043",
    question: "Which of the Social Media you use?",
    type: "checkbox",
    options: [
      { key: "239196382031", text: "Instagram" },
      { key: "239196382032", text: "Facebook" },
      { key: "239196382033", text: "Discord" },
      { key: "239196382034", text: "LinkedIn" },
      { key: "239196382035", text: "Twitter" },
    ],
    isRequired: false,
  },
  {
    key: "1703320688044",
    question: "Enter your email address below.",
    type: "short",
    isRequired: true,
  },
  {
    key: "1703320688045",
    question: "Suggest how did you feel filling out this survey form?",
    type: "long",
    isRequired: false,
  },
];

const Survey = (props) => {
  const formId = props.formId;
  return (
    <div className={classes["survey-page"]}>
      <div className={classes["survey-container"]}>
        <SurveyHeader
          title={formData.title}
          description={formData.description}
        />
        {questions.map((question) => (
          <SurveyQuestion question={question} key={question.key} />
        ))}
        <div className={classes['btn-container']}>
          <button className={classes["submit-btn"]}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
