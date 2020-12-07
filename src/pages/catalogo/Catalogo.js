import { Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import ProjectCard from "./ProjectCard";
import alunos from "../../api/User";
import projetos from "../../api/Projetos";
import { Link } from "react-router-dom";

const useStyles = () => ({
  root: {},
  title: {
    marginTop: "2%",
    marginLeft: "10%",
  },
  grid: {
    marginTop: "2%",
    marginLeft: "10%",
    marginRight: "10%",
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "50%",
  },
  item: {
    flex: 1,
    paddingLeft: 5,
  },
});

class Catalogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: [],
    };
  }

  componentDidMount() {
    list().then((alunos) => this.setState({ alunos: alunos }));
  }

  // vai pegar os usuarios do controlador
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          Alunos cadastrados:
        </Typography>
        <div className={classes.grid}>
          {this.state.alunos.map((aluno) => (
            <ProfileCard
              nome={aluno.nome}
              area={aluno.area}
              imagem=""
              className={classes.item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Catalogo);
