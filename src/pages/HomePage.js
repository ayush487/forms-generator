import { useEffect } from "react";
import ChooseBuilderDiv from "../components/home/ChooseBuilderDiv";
import FAQ from "../components/home/FAQ";
import WelcomeText from "../components/home/WelcomeText";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home - FormBuilder"
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
      <WelcomeText />
      <ChooseBuilderDiv />
      <FAQ />
    </div>
  );
};
export default HomePage;
