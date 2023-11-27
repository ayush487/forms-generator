import React, { useState } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  setLoggedIn: (boolean) => {},
});

export const AuthContextProvider = (props) => {
  const [login, setLogin] = useState(false);
  const contextValue = {
    isLoggedIn: login,
    setLoggedIn: setLogin,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
