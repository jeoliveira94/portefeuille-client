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

import alunos from "../../api/User";
import projetos from "../../api/Projetos";

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
  profileImage: {
    height: 100,
    width: 100,
    margin: "auto",
  },
  button: {
    marginTop: theme.spacing(2),
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
    color: "#000000",
  },
}));

export default function Profile({ match }) {
  const classes = useStyles();

  // estados
  const [aluno, setAluno] = useState({});
  const [projetoList, setProjetoList] = useState([
    { nome: "carregando", coordenador: "carregando" },
  ]);

  useEffect(() => {
    alunos.read(match.params.matricula).then((data) => {
      setAluno(data);
    });
    projetos.listByAluno(match.params.matricula).then((data) => {
      setProjetoList(data);
    });
  }, [match.params.matricula]);

  return (
    <Paper className={classes.root} elevation={4}>
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Avatar className={classes.profileImage} />
        <Typography variant="h6" className={classes.title}>
          {aluno.nome}
        </Typography>
      </div>
      <Typography variant="subtitle2" style={{ marginLeft: 0 }}>
        Projetos do Aluno
      </Typography>
      <List dense>
        <Divider />
        {projetoList.map((projeto, i) => {
          return (
            <div>
              <Link to={"/projeto/" + projeto.id} className={classes.link}>
                <ListItem>
                  <ListItemText
                    primary={projeto.nome}
                    secondary={"Coordenador: " + projeto.coordenadorMatricula}
                  />{" "}
                </ListItem>
              </Link>
              <Divider />
            </div>
          );
        })}
      </List>
    </Paper>
  );
}
