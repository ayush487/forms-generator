import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./components/login/LoginPage";
import FormsPage from "./pages/FormsPage";
import CreateFormPage from "./pages/CreateFormPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/utility/Header";
import Footer from "./components/utility/Footer";
import { useContext, useEffect, useState } from "react";
import LogoutPage from "./pages/LogoutPage";
import AuthContext from "./store/auth-context";

function App() {
  const [overlay, setOverlay] = useState(false);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if(theme==='dark') {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [])
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
      <Header toggleLogin={toggleLoginScreen} />
      {overlay && <LoginPage onClick={toggleLoginScreen} />}
      <main>
        <Routes>
          <Route path="/forms/:formId" element={<FormsPage />}></Route>
          <Route path="/forms" element={<CreateFormPage />}></Route>
          {authContext.isLoggedIn && (
            <Route path="/logout" element={<LogoutPage />}></Route>
          )}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer signupWindow={toggleLoginScreen} />
      </footer>
    </div>
  );
}

export default App;
// https://dev.codedesign.ai/app/builder?project=form-creation-wizard14ts1samuq#home
