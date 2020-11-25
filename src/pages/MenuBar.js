import { Card, makeStyles, Typography, TextField } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
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
  title: {
    fontSize: "2.5rem",
    paddingLeft: "10%",
    paddingTop: "10px",
    marginTop: 10,
    color: "#000",
  },
}));

export default function MenuBar() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Typography variant="h1" className={classes.title}>
          Portefeuille
        </Typography>
      </NavLink>
      <TextField
        label="Buscar"
        variant="outlined"
        inputProps={{ "arial-label": "search" }}
        className={classes.search}
      />
    </Card>
  );
}
