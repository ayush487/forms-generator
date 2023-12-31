import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./components/login/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/utility/Header";
import Footer from "./components/utility/Footer";
import { useContext, useEffect, useState } from "react";
import LogoutPage from "./pages/LogoutPage";
import AuthContext from "./store/auth-context";
import Alert from "./components/utility/Alert";
import CreateFormPage from "./pages/CreateFormPage";
import Dashboard from "./pages/Dashboard";
import SurveyPage from "./pages/SurveyPage";
import ResponsePage from "./pages/ResponsePage";
import SubmitPage from "./pages/SubmitPage";

function App() {
  const [overlay, setOverlay] = useState(false);
  const [alert, setAlert] = useState(null);
  const authContext = useContext(AuthContext);
  const isResponsePage = window.location.pathname.startsWith("/responses");
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    const token = localStorage.getItem("form-builder-token")
    const payloadData = localStorage.getItem("form-builder-user-data")
    authContext.login(token,payloadData)

  }, []);
  const toggleLoginScreen = () => {
    if (overlay) {
      document.getElementById("overlay-root").classList.add("modal-close");
      setTimeout(() => {
        setOverlay(false);
        document.getElementById("overlay-root").classList.remove("modal-close");
      }, 150);
    } else {
      setOverlay(true);
    }
  };
  return (
    <div className="App">
      
      {!isResponsePage && <Header toggleLogin={toggleLoginScreen} />}
      {overlay && <LoginPage onClick={toggleLoginScreen} setAlert={setAlert} />}
      <main>
        <Routes>
          <Route path="/forms/submit/:formId/:title" element={<SubmitPage />}></Route>
          <Route path="/forms/:formId" element={<SurveyPage />}></Route>
          {authContext.isLoggedIn && (
            <>
              <Route
                path="/responses/:formId"
                element={<ResponsePage />}
              ></Route>
              <Route
                path="/forms"
                element={<Dashboard setAlert={setAlert} />}
              ></Route>
              <Route path="/create-form" element={<CreateFormPage />}></Route>
              <Route path="/logout" element={<LogoutPage />}></Route>
            </>
          )}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        {alert && <Alert>{alert}</Alert>}
      </main>
      {!isResponsePage && (
        <footer>
          <Footer signupWindow={toggleLoginScreen} />
        </footer>
      )}
    </div>
  );
}

export default App;
