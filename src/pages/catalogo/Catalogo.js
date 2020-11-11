import { Typography, withStyles } from "@material-ui/core";
import React, { useState, Component } from "react";
import ProfileCard from "./ProfileCard";
import { list } from "../../api/User";

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
    this.state = {};
  }

  componentDidMount() {
    try {
      console.log(list());
    } catch {}
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
          <ProfileCard
            nome="Eduardo 'Ruemmai' Oliveira"
            area="Back-end"
            imagem="https://avatars3.githubusercontent.com/u/26828695?s=400&u=5f0b619d8f68858f574e2d7b84b2f7341f21abb7&v=4"
            className={classes.item}
          />
          <ProfileCard
            nome="Weverton 'Vvt' Trindade"
            area="Front-end"
            imagem="https://avatars1.githubusercontent.com/u/19598108?s=400&u=21e4d50f0c7de9b1a6a440f6387d455db94de930&v=4"
            className={classes.item}
          />
          <ProfileCard
            nome="Pedro 'Psy' Carvalho"
            area="Banco de Dados"
            imagem="https://avatars2.githubusercontent.com/u/17572104?s=400&u=07e2c9d2ec2b666fe21c05515abf961113b605b1&v=4"
            className={classes.item}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Catalogo);
