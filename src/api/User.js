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

async function signin(aluno) {
  const options = {
    headers: {
      "Access-Control-Allow-Credentials": true,
    },
  };
  const response = await Axios.post(apiUrl + "autenticar", aluno, options);

  sessionStorage.setItem("autenticado", JSON.stringify(aluno));

  console.log(sessionStorage.getItem("autenticado"));

  return response.data;
}

function signout() {
  console.log("removendo");
  sessionStorage.removeItem("autenticado");
  console.log(isAuthenticated());
}

function isAuthenticated() {
  if (JSON.parse(sessionStorage.getItem("autenticado")) !== null) {
    console.log(JSON.parse(sessionStorage.getItem("autenticado")).matricula);
    return true;
  }
  return false;
}

export { create, list, read, signin, isAuthenticated, signout };
