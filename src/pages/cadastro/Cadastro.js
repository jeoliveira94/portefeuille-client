import React, { Component } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  withStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { create } from "../../api/User";

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

function Cadastro(props) {
  const { classes } = props;

  const [values, setValues] = React.useState({
    nome: "",
    matricula: "",
    senha: "",
    dataNascimento: "",
    area: "",
    habilidades: "",
  });

  const [errorText, setErrorText] = React.useState({
    nome: "",
    matricula: "",
    senha: "",
    nomeError: false,
    matriculaError: false,
    senhaError: false,
  });

  const [open, setOpen] = React.useState(false);

  const handleChange = (fieldName) => {
    return (event) => {
      setValues({ ...values, [fieldName]: event.target.value });
      console.log(values);
    };
  };

  const handleSubmit = () => {
    const aluno = {
      nome: values.nome || undefined,
      matricula: values.matricula || undefined,
      senha: values.senha || undefined,
      dataNascimento: values.dataNascimento || undefined,
      area: values.area || undefined,
      habilidades: values.habilidades || undefined,
    };

    if (!aluno.nome || aluno.nome.length < 3) {
      setErrorText({
        ...errorText,
        nome: "Insira um nome de usuário com ao menos 3 caracteres.",
        nomeError: true,
      });
    } else if (!aluno.matricula || isNaN(aluno.matricula)) {
      setErrorText({
        ...errorText,
        matricula: "Insira um número de matrícula válido.",
        matriculaError: true,
      });
    } else if (!aluno.senha || aluno.matricula.length <= 6) {
      setErrorText({
        ...errorText,
        senha: "Insira uma senha com ao menos 6 caracteres.",
        senhaError: true,
      });
    } else {
      create(aluno).then((resposta) => {
        console.log(resposta);
        setOpen(true);
      });
    }
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Cadastro
          </Typography>
          <form>
            <TextField
              id="nome"
              label="Nome"
              className={classes.textField}
              value={values.nome}
              onChange={handleChange("nome")}
              margin="normal"
              autoComplete="off"
              error={errorText.nomeError}
              helperError={errorText.nome}
            />
            <br />
            <TextField
              id="matricula"
              label="Matricula"
              className={classes.textField}
              value={values.matricula}
              onChange={handleChange("matricula")}
              margin="normal"
              error={errorText.matriculaError}
              helperError={errorText.matricula}
            />
            <br />
            <TextField
              id="senha"
              label="Senha"
              className={classes.textField}
              value={values.senha}
              onChange={handleChange("senha")}
              margin="normal"
              type="password"
              error={errorText.senhaError}
              helperError={errorText.senha}
            />
            <br />
            <TextField
              label="Data de Nascimento"
              type="date"
              className={classes.textField}
              value={values.dataNascimento}
              onChange={handleChange("dataNascimento")}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <TextField
              id="area"
              label="Área de Atuação"
              className={classes.textField}
              value={values.area}
              onChange={handleChange("area")}
              margin="normal"
              autoComplete="off"
            />
            <br />
            <TextField
              id="habilidade"
              label="Habilidades"
              className={classes.textField}
              value={values.habilidade}
              onChange={handleChange("habilidades")}
              margin="normal"
              autoComplete="off"
            />
          </form>
          <br />
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Confirmar
          </Button>
        </CardActions>
      </Card>
      <Dialog open={open} disableBackdropClick={true}>
        <DialogTitle>Nova Conta</DialogTitle>
        <DialogContent>
          <DialogContentText>Nova conta criada com sucesso!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/signin">
            <Button color="primary" autoFocus="autoFocus" variant="contained">
              Entrar
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(useStyles)(Cadastro);
