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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matricula: "",
      password: "",
      error: "",
      redirectToReferrer: false,
    };
  }

  handleChange(fieldName) {
    return (event) => {
      this.setState({ ...this.state, [fieldName]: event.target.value });
    };
  }

  handleSubmit() {
    // user = {
    //   email: this.state.name,
    //   password: this.state.password,
    // };
    // create();
  }

  render() {
    const { classes } = this.props;

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
                value={this.state.matricula}
                onChange={this.handleChange("matricula")}
                margin="normal"
                autoComplete="off"
              />
              <br />
              <TextField
                id="senha"
                label="Senha"
                type="password"
                className={classes.textField}
                value={this.state.password}
                onChange={this.handleChange("password")}
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
              onClick={this.handleSubmit()}
            >
              Confirmar
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(Login);
