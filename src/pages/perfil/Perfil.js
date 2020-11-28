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

import { read } from "../../api/User";

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
  button: {
    marginTop: theme.spacing(2),
    textDecoration: "none",
  },
}));

export default function Profile({ match }) {
  const classes = useStyles();

  // estados
  const [user, setUser] = useState({});

  useEffect(() => {
    read(match.params.matricula).then((data) => {
      setUser(data);
    });
  }, [match.params.matricula]);

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h6" className={classes.title}>
        Perfil
      </Typography>
      <List dense>
        <ListItem>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText primary={user.nome} secondary={user.matricula} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={"Juntou-se em: " + new Date(user.created).toDateString()}
          />
        </ListItem>
      </List>
    </Paper>
  );
}
