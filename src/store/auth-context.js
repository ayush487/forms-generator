import React, { useState } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = window.localStorage.getItem("form-builder-token");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;
  const loginHandler = (token) => {
    window.localStorage.setItem("form-builder-token", token);
    setToken(token);
  };
  const logoutHandler = () => {
    window.localStorage.removeItem("form-builder-token");
    setToken(null);
  };
  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
