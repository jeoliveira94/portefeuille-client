import Axios from "axios";

const apiUrl = "http://localhost:8080/api/v1/alunos/";

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
    headers: {
      "Access-Control-Allow-Credentials": true,
    },
  };

  const response = await Axios.get(apiUrl, options);
  const alunos = response.data;
  console.log(alunos);
  return alunos;
}

async function read(matricula) {
  const options = {
    headers: {
      "Access-Control-Allow-Credentials": true,
    },
  };

  const response = await Axios.get(apiUrl + matricula, options);
  const aluno = response.data;
  console.log(aluno);
  return aluno;
}

export { create, list, read };
