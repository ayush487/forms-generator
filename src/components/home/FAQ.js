import QuestionBox from "../utility/QuestionBox";
import classes from "./FAQ.module.css";

const faq_array = [
  {
    id : 1,
    question: "How do I submit a response using FormBuilder?",
    answer:
      "To submit a response, click on the provided link, answer the questions, and click the 'Submit' button at the end of the form.",
  },
  {
    id : 2,
    question: "Can I edit my responses after submitting the form?",
    answer: "No, you cannot edit your responses after submitting.",
  },
  {
    id : 3,
    question: "Can I share the form with others?",
    answer:
      "Yes, you can share the form link with others. However, the form owner might set restrictions on who can access and submit responses.",
  },
  {
    id : 4,
    question: "Are the responses anonymous?",
    answer:
      "It depends on the settings chosen by the form owner. Some forms allow for anonymous responses, while others may require identification.",
  },
];

const FAQ = () => {
  return (
    <div className={classes["faq-container"]}>
      <h1>Automate, Customize and Integrate Effortlessly </h1>
      <div className={classes.faq}>
        <div className={classes["banner-container"]}>
          <img src="/assets/faq-banner.jpg" alt="rocks posing as questions" />
        </div>
        <div className={classes["questions-container"]}>
          
          {faq_array.map(faq => {
            return (
              <QuestionBox key={faq.id} ques={faq.question} ans={faq.answer} />
            )
          })}
        </div>
      </div>
    </div>
  );
};
export default FAQ;
