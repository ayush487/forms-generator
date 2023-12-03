const apiUrl = "http://127.0.0.1:8080";

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
  fetch(apiUrl + "/login", {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(username + ":" + password)}`,
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
      console.log(data);
      setError(null);
      loginFunction(`Basic ${btoa(username + ":" + password)}`);
      setLoggingIn(false);
      closeModal();
      setAlert('Login Successfully!')
      setTimeout(() => setAlert(null), 4000)
    })
    .catch((error) => {
      setError(error.message);
      setLoggingIn(false);
    });
};

export const signupRequest = (userData, setSigningUp, setError, setLoginPage, setAlert) => {
  setSigningUp(true);
  fetch(apiUrl + "/signup", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if (data.errorCount) {
        console.log("Signup Error");
        setError(data.message[0]);
      } else {
        setAlert('Register Successfully!')
        setTimeout(() => setAlert(null), 4000)
        setError(null);
        setLoginPage()
      }
      setSigningUp(false);
    });
};
