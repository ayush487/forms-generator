const apiUrl = "http://192.168.1.11:8080";

export const loginRequest = (
  username,
  password,
  setLoggingIn,
  loginFunction,
  setError,
  closeModal,
  setAlert
) => {
  setLoggingIn(true);
  fetch(apiUrl + "/authenticate", {
    method: "POST",
    body: JSON.stringify({
      email: username,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Wrong Username or Password");
      }
    })
    .then((data) => {
      console.log(data.token);
      const jwtToken = data.token;
      const payloadEncoded = jwtToken.split(".")[1];
      const payloadDataJson = window.atob(payloadEncoded);
      setError(null);
      loginFunction(`Bearer ${jwtToken}`,payloadDataJson);
      setLoggingIn(false);
      closeModal();
      setAlert("Login Successfully!");
      setTimeout(() => setAlert(null), 4000);
    })
    .catch((error) => {
      setError(error.message);
      setLoggingIn(false);
      setLoggingIn(false);
    });
};

export const signupRequest = (
  userData,
  setSigningUp,
  setError,
  setLoginPage,
  setAlert
) => {
  setSigningUp(true);
  fetch(apiUrl + "/register", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("This is data " + data)
      if (data.hasErrors) {
        throw new Error(data.message);
      } else {
        setAlert("Register Successfully!");
        setTimeout(() => setAlert(null), 4000);
        setError(null);
        setLoginPage();
        setSigningUp(false)
      }
    })
    .catch((error) => {
      console.log(error)
      setError(error.message)
      setSigningUp(false)
    })
};
