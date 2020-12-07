import Axios from "axios";

const apiUrl = "http://localhost:8080/api/v1/coordenadores/";

async function read(matricula) {
  const options = {
    headers: {
      "Access-Control-Allow-Credentials": true,
    },
  };

  const response = await Axios.get(apiUrl + matricula, options);
  const coordenador = response.data;
  console.log(coordenador);
  return coordenador;
}

export default { read };
