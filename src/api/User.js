import Axios from "axios";

const apiUrl = "localhost:8080/api/v1/alunos";

async function create(user) {
  let response;
  try {
    await Axios.post(apiUrl, user, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => {
        response = res.data;
      })
      .catch((error) => {
        response = error.response.data;
      });
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function list() {
  let response;
  try {
    await Axios.get(apiUrl, {
      headers: { timeout: 3000 },
    })
      .then((res) => {
        response = res.data;
      })
      .catch((error) => {
        response = error.response.data;
      });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { create, list };
