import React, { useState } from "react";
import propTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import PlayerInfo from "./PlayerInfo";
import Players from "./Players";

const buttonStyle = {
  background: "#ccc",
  marginTop: "15px",
};
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "15ch",
    },
  },
}));

function PlayerForum(props) {
  const classes = useStyles();
  const id = props.players.length + 1;
  const [newPlayer, setNewPlayer] = useState({
    id: id,
    number: "",
    firstName: "",
    lastName: "",
    position: "",
    year: "",
  });
  const handleChange = (event) => {
    setNewPlayer({
      ...newPlayer,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="filled-basic"
        label="#"
        variant="filled"
        size="small"
        name="number"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="filled-basic"
        label="First Name"
        variant="filled"
        size="small"
        onChange={(e) => handleChange(e)}
        name="firstName"
      />
      <TextField
        id="filled-basic"
        label="Last Name"
        variant="filled"
        size="small"
        name="lastName"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="filled-basic"
        label="Position"
        variant="filled"
        size="small"
        name="position"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="filled-basic"
        label="Year"
        variant="filled"
        size="small"
        name="year"
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={() => props.click(newPlayer)} style={buttonStyle}>
        Add
      </Button>
    </form>
  );
}

PlayerForum.propTypes = {
  players: propTypes.object.isRequired,
};

export default PlayerForum;
