import Axios from "axios";

const apiUrl = "http://localhost:8080/api/v1/projetos/";

async function create(projeto) {
  const options = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const response = await Axios.post(apiUrl, projeto, options);
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
  const projetos = response.data;

  return projetos;
}

const listByAluno = async (matricula) => {
  const url = apiUrl + "aluno/" + matricula;
  const options = {
    headers: {
      "Access-Control-Allow-Credentials": true,
    },
  };

  const response = await Axios.get(url, options);

  const projeto = response.data;
  return projeto;
};

export default { create, listByAluno, list };
