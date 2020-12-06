import {
  Card,
  makeStyles,
  Typography,
  AppBar,
  Button,
  Toolbar,
  TextField,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated, getAuthenticated, signout } from "../api/User";

const useStyles = (theme) => ({
  root: {
    background: "rgba(44, 45, 51)",
    color: "#FFF",
  },
  title: {
    color: "#FFF",
    padding: theme.spacing(2),
    textDecoration: "none",
    transition: "0.3s",
    "&:visited, &:hover, &:active": {
      textDecoration: "none",
    },
    "&:hover": {
      background: "rgb(39, 91, 102)",
    },
  },
  content: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    justifyContent: "space-between",
  },
  links: {
    textDecoration: "none",
    "&:visited, &:hover, &:active": {
      textDecoration: "none",
    },
  },
  search: {
    borderRadius: "4px",
    backgroundColor: "#f3f3f3",
    height: "3rem",
    width: "15rem",
    marginRight: "10%",
    marginTop: "10px",
    marginBottom: 10,
    paddingBottom: "10px",
  },
});

function MenuBar(props) {
  const { classes } = props;

  const [redirecionar, setRedirecionar] = React.useState(false);

  if (redirecionar) return <Redirect to="/" />;

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.content}>
        <Link to="/" className={classes.title}>
          <Typography variant="h6">Portefeuille</Typography>
        </Link>
        <div className={classes.links}>
          {!isAuthenticated() && (
            <span>
              <Link to="/cadastro" className={classes.links}>
                <Button className={classes.title}>Cadastrar</Button>
              </Link>
              <Link to="/acesso" className={classes.links}>
                <Button className={classes.title}>Acessar</Button>
              </Link>
            </span>
          )}
          {isAuthenticated() && (
            <span>
              <Link
                to={`/aluno/${
                  JSON.parse(sessionStorage.getItem("autenticado")).matricula
                }`}
                className={classes.links}
              >
                <Button className={classes.title}>Meu Perfil</Button>
              </Link>
              <Button
                className={classes.title}
                onClick={() => {
                  signout();
                  setRedirecionar(true);
                }}
              >
                Sair
              </Button>
            </span>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(useStyles)(MenuBar);
