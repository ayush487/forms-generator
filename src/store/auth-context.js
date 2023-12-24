import React, { useState } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (token, payloadDataJson) => {},
  logout: () => {},
  jwtToken: "",
  userData: {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  
  const loginHandler = (token, payloadDataJson) => {
    if(!token || !payloadDataJson) {
      return
    }
    window.localStorage.setItem("form-builder-token", token);
    setToken(token);
    setLoggedIn(true)
    const payloadData = JSON.parse(payloadDataJson);
    const data = {
      email : payloadData.sub,
      name : payloadData.name,
      id : payloadData.id
    }
    setUserData(data)
    window.localStorage.setItem('form-builder-user-data',JSON.stringify(data));
  };
  const logoutHandler = () => {
    window.localStorage.removeItem("form-builder-token");
    window.localStorage.removeItem('form-builder-user-data')
    setToken(null);
    setUserData(null)
    setLoggedIn(false)
  };
  const contextValue = {
    isLoggedIn: loggedIn,
    login: loginHandler,
    logout: logoutHandler,
    jwtToken: token,
    userData : userData
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
