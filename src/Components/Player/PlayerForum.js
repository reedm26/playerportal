import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { Button, TextField } from "@material-ui/core";
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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label="#" variant="filled" size="small" />
      <TextField
        id="filled-basic"
        label="First Name"
        variant="filled"
        size="small"
      />
      <TextField
        id="filled-basic"
        label="Last Name"
        variant="filled"
        size="small"
      />
      <TextField
        id="filled-basic"
        label="Position"
        variant="filled"
        size="small"
      />
      <TextField
        id="filled-basic"
        label="Year"
        variant="filled"
        size="small"
        name="year"
      />
      <Button onClick={props.click} style={buttonStyle}>
        Add
      </Button>
    </form>
  );
}

PlayerForum.propTypes = {};

export default PlayerForum;
