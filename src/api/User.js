import Axios from "axios";

const apiUrl = "localhost:8080/api/v1/alunos";

async function create(aluno) {
  const options = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const response = await Axios.post(apiUrl, aluno, options);
  const resposta = response.data;
  return resposta;
}

async function list() {
  const options = {
    url: apiUrl,
    method: "GET",
    headers: {
      "Access-Control-Allow-Credentials": true,
    },
  };
  const response = await Axios(options);
  const alunos = response.data;
  console.log(alunos);
  return alunos;
}

export { create, list };
