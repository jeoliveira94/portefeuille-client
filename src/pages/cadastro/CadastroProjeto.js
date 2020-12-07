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
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import projetos from "../../api/Projetos";

const useStyles = (theme) => ({
  root: {
    paddingBottom: "10%",
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

function CadastroProjeto(props) {
  const { classes } = props;

  const [values, setValues] = React.useState({});

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
    const projeto = {
      alunoMatricula: values.alunoMatricula || undefined,
      coordenadorMatricula: values.coordenadorMatricula || undefined,
      nome: values.nome || undefined,
      tipo: values.tipo || undefined,
      data: values.data || undefined,
      status: 1,
      descricao: values.descricao || undefined,
    };

    if (projeto.tipo == "Tipo 1") projeto.tipo = 1;
    else if (projeto.tipo == "Tipo 2") projeto.tipo = 2;

    projetos.create(projeto).then((data) => {
      console.log(data);
      setOpen(true);
    });
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Novo Projeto
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
            />
            <br />
            <TextField
              id="alunoMatricula"
              label="Matricula do Aluno"
              className={classes.textField}
              value={values.alunoMatricula}
              onChange={handleChange("alunoMatricula")}
              margin="normal"
            />
            <br />
            <TextField
              id="alunoMatricula"
              label="Matricula do Coordenador"
              className={classes.textField}
              value={values.coordenadorMatricula}
              onChange={handleChange("coordenadorMatricula")}
              margin="normal"
            />
            <br />
            <TextField
              label="Data de Início"
              type="date"
              className={classes.textField}
              value={values.data}
              onChange={handleChange("data")}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <TextField
              id="area"
              label="Descrição do Projeto"
              className={classes.textField}
              value={values.descricao}
              onChange={handleChange("descricao")}
              margin="normal"
              autoComplete="off"
            />
            <br />
            <FormControl component="fieldset" style={{ marginTop: "2%" }}>
              <FormLabel component="legend">Tipo do Projeto:</FormLabel>
              <RadioGroup value={values.tipo} onChange={handleChange("tipo")}>
                <FormControlLabel
                  value="Tipo 1"
                  control={<Radio />}
                  label="Tipo 1"
                />
                <FormControlLabel
                  value="Tipo 2"
                  control={<Radio />}
                  label="Tipo 2"
                />
              </RadioGroup>
            </FormControl>
            <br />
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
        <DialogTitle>Nova Projeto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Novo projeto criado com sucesso!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/">
            <Button color="primary" autoFocus="autoFocus" variant="contained">
              Página Inicial
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(useStyles)(CadastroProjeto);
