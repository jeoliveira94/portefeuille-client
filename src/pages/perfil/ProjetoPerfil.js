import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItem,
  Divider,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@material-ui/core";

import projetos from "../../api/Projetos";
import coordenadores from "../../api/Coordenador";
import alunoAPI from "../../api/User";

const useStyles = makeStyles((theme) => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
  }),
  title: {
    marginTop: theme.spacing(3),
    color: theme.palette.openTitle,
  },
  subtitle: {
    marginTop: theme.spacing(2),
    color: theme.palette.openSubtitle,
  },
  link: {
    textDecoration: "none",
    color: "#000000",
  },
  segments: {
    textAlign: "left",
    marginLeft: "10%",
  },
}));

export default function Projeto({ match }) {
  const classes = useStyles();

  // estados
  const [projeto, setProjeto] = useState({});

  useEffect(() => {
    projetos.read(match.params.id).then((dado) => {
      setProjeto(dado);
    });
  }, [match.params.id]);

  return (
    <Paper className={classes.root} elevation={4}>
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Typography variant="h6" className={classes.title}>
          {projeto.nome}
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {`Iniciado em ${projeto.data}`}
        </Typography>
      </div>
      <div style={{ margin: 0 }}>
        <Typography variant="h6" className={classes.title}>
          Integrantes
        </Typography>
        <div className={classes.segments}>
          <Typography variant="subtitle2">
            <Link
              to={`/aluno/${projeto.alunoMatricula}`}
              style={{ color: "#888" }}
            >
              {`Aluno: ${projeto.alunoMatricula}`}
            </Link>

            <br />
            <Link
              to={`/coordenador/${projeto.alunoMatricula}`}
              style={{ color: "#888" }}
            >
              {`Coordenador: ${projeto.coordenadorMatricula}`}
            </Link>
          </Typography>
        </div>
        <Typography variant="h6" className={classes.title}>
          Informações
        </Typography>
        <div className={classes.segments}>
          <Typography variant="subtitle1">Descrição:</Typography>
          <br />
          <Typography variant="subtitle2">{projeto.descricao}</Typography>
        </div>
      </div>
    </Paper>
  );
}
