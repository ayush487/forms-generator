const apiUrl = "http://127.0.0.1:8080";

export const responseRequest = (token, formId, setFormData, setResponses) => {
  fetch(`${apiUrl}/responses/${formId}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Not authorized");
      }
    })
    .then((data) => {
      setFormData(data.form);
      setResponses(data.responses);
    })
    .catch((e) => {
      alert(e.message);
      console.error(e);
    });
};
