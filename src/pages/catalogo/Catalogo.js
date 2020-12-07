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
    paddingBottom: "10%",
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
      projetos: [],
    };
  }

  componentDidMount() {
    alunos
      .list()
      .then((data) => this.setState({ ...this.state, alunos: data }));
    projetos
      .list()
      .then((data) => this.setState({ ...this.state, projetos: data }));
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
            <Link
              to={`aluno/${aluno.matricula}`}
              style={{ textDecoration: "none" }}
            >
              <ProfileCard
                nome={aluno.nome}
                area={aluno.area}
                imagem=""
                className={classes.item}
              />
            </Link>
          ))}
        </div>
        <Typography variant="h6" className={classes.title}>
          Projetos cadastrados:
        </Typography>
        <div className={classes.grid}>
          {this.state.projetos.map((projeto) => (
            <Link
              to={`projeto/${projeto.id}`}
              style={{ textDecoration: "none" }}
            >
              <ProjectCard
                nome={projeto.nome}
                area={projeto.descricao}
                imagem=""
                className={classes.item}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Catalogo);
