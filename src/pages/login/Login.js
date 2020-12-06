import {
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { Redirect } from "react-router";
import { signin } from "../../api/User";

const useStyles = (theme) => ({
  root: {
    paddingBottom: "20%",
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  error: {
    verticalAlign: "middle",
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
});

function Login(props) {
  const { classes } = props;

  const [values, setValues] = React.useState({
    matricula: "",
    senha: "",
    error: "",
    redirectToReferrer: false,
  });

  const handleChange = (fieldName) => {
    return (event) => {
      setValues({ ...values, [fieldName]: event.target.value });
    };
  };

  const clickSubmit = () => {
    const user = {
      matricula: values.matricula || undefined,
      senha: values.senha || undefined,
    };
    console.log("aq");
    signin(user).then((data) => {
      setValues({ ...values, error: "", redirectToReferrer: true });
    });
  };

  const { from } = {
    from: { pathname: "/" },
  };

  const { redirectToReferrer } = values;

  if (redirectToReferrer) return <Redirect to={from} />;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Entrar
          </Typography>
          <form>
            <TextField
              id="matricula"
              label="Matrícula"
              className={classes.textField}
              value={values.matricula}
              onChange={handleChange("matricula")}
              margin="normal"
              autoComplete="off"
            />
            <br />
            <TextField
              id="senha"
              label="Senha"
              type="senha"
              className={classes.textField}
              value={values.senha}
              onChange={handleChange("senha")}
              margin="normal"
            />
          </form>
          <br />
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            className={classes.submit}
            onClick={clickSubmit}
          >
            Confirmar
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(useStyles, { withTheme: true })(Login);
