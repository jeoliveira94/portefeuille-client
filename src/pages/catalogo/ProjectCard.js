import {
  Avatar,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
  },
  avatar: {
    margin: "auto",
    width: 80,
    height: 80,
  },
  name: {
    paddingTop: 20,
    fontSize: 25,
    textAlign: "center",
  },
  area: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: "center",
  },
}));

export default function ProfileCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h1" className={classes.name}>
          {props.nome}
        </Typography>
        <Typography variant="h4" className={classes.area}>
          {props.area}
        </Typography>
      </CardContent>
    </Card>
  );
}
