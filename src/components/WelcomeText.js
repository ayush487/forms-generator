import classes from './WelcomeText.module.css'

const WelcomeText = () => {
  return (
    <div className={classes['welcome-text']}>
      <h1>Create Custom Forms with Ease </h1>
      <p>
        FormBuilder lets you build customized forms without technical know-how,
        try it today!
      </p>
      <div className={classes['img-container']}>
        <img src="/assets/broken-glass.jpg" alt='broken glass'></img>
      </div>
    </div>
  );
};

export default WelcomeText;
