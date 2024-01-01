const apiUrl = "http://127.0.0.1:8080";

export const formPostRequest = (
  data,
  token,
  navigate,
  setRequestSending,
  logoutFunction
) => {
  setRequestSending(true);
  const dataJson = JSON.stringify(data);
  fetch(apiUrl + "/add-form", {
    method: "POST",
    body: dataJson,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  }).then((response) => {
    if (response.ok) {
      navigate("/forms");
    } else if (response.status === 401) {
      alert("Session Expired\nLogin again");
      logoutFunction();
      navigate("/");
    } else {
      alert("Something went wrong!");
    }
    setRequestSending(false);
  });
};

export const allFormsGetRequest = (
  token,
  setForms,
  setLoading,
  navigate,
  logoutFunction
) => {
  fetch(apiUrl + "/forms", {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        alert("Session Expired\nLogin Again!");
        logoutFunction();
        navigate("/");
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      data.sort((a, b) => b.id - a.id);
      setForms(data);
      setLoading(false);
    })
    .catch((e) => {
      console.log(e);
      setForms([]);
      setLoading(false);
    });
};

export const formGetRequest = (
  form_id,
  setFormData,
  setInitialResponse,
  setError
) => {
  fetch(apiUrl + "/forms/" + form_id)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        setError(true);
        throw new Error("Error 404");
      }
    })
    .then((data) => {
      const initState = data.questions.map((question) => {
        return {
          questionId: question.key,
          response: "",
          required: question.required,
        };
      });
      setInitialResponse(initState);
      setFormData(data);
    })
    .catch((error) => console.log("Error 404 not found"));
};

export const formFillRequest = (responseData,title, setError,navigate, setSubmitting) => {
  setSubmitting(true)
  fetch(apiUrl + "/forms/" + responseData.formId, {
    method: "POST",
    body: JSON.stringify(responseData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      setError(false)
      const encTitle = window.btoa(title)
      navigate(`/forms/submit/${responseData.formId}/${encTitle}`)
    }
    else {
      setError(true)
      console.error("Responses not valid");
    }
    setSubmitting(false)
  });
};
