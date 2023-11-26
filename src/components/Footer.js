import { useState } from "react";
import Button from "./Button";
import classes from "./Footer.module.css";

const Footer = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const switchTheme = () => {
    if (isDarkTheme) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    setDarkTheme((prevState) => !prevState);
  };
  return (
    <div className={classes.footer_container}>
      <div className={classes.footer}>
        <div className={classes.container__1}>
          <div className={classes.mascot}>Start Building Your Form </div>
          <div className={classes.community}>
            <p>
              Join the FormBuilder community today and begin creating your forms
              with ease.
            </p>
            <div>
              <Button>Join Now</Button>
              <i
                className={`fa-solid ${isDarkTheme ? "fa-sun" : "fa-moon"} 
                fa-xl ${classes.themeBtn}`}
                onClick={switchTheme}
              ></i>
            </div>
          </div>
        </div>
        <hr className={classes.footer_rulling} />
        <div className={classes.container__2}>
          <div className={classes.branding}>
            <h5>FormBuilder</h5>
            <p>
              FormBuilder is your ultimate solution to create responsive,
              customizable forms.
            </p>
          </div>

          <div className={classes.brand_details}>
            <div className={classes.options}>
              <ul>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className={classes.social}>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.bottom_text}>
          <p>©2023 FormBuilder. All rights reserved. </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
