import { makeStyles, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    marginTop: '2%',
    marginLeft: '10%',
  },
  grid: {
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '50%',
  },
  item: {
    flex: 1,
    paddingLeft: 5,
  },
}));

const getAlunos = async () => {
  const options = {
    url: 'http://localhost:8080/api/v1/alunos',
    method: 'GET',
    headers: {
      'Access-Control-Allow-Credentials': true,
    },
  };
  const response = await axios(options);
  const alunos = response.data;
  console.log(alunos);
  return alunos;
};

export default function Catalogo() {
  const classes = useStyles();

  // vai pegar os usuarios do controlador

  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    getAlunos().then((alunos) => setAlunos(alunos));
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Alunos cadastrados:
      </Typography>
      <div className={classes.grid}>
        {alunos.map((aluno) => (
          <ProfileCard
            nome={aluno.nome}
            area={aluno.area}
            imagem=""
            className={classes.item}
          ></ProfileCard>
        ))}
      </div>
    </div>
  );
}
