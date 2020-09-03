import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PlayerInfo from "./Player/PlayerInfo";

function EditDialog(props) {
  const [updatedPlayer, setUpdatedPlayer] = useState(props.player);

  const handleChange = (event) => {
    setUpdatedPlayer({
      ...updatedPlayer,
      [event.target.name]: event.target.value,
    });
  };
  const twoFunction = (updatedPlayer) => {
    props.editPlayer(updatedPlayer);
    props.handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        aria-labelledby="form-dialog-title"
        onSubmit={onsubmit}
      >
        <DialogTitle id="form-dialog-title">HI</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="#"
            name="number"
            onChange={(e) => handleChange(e)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            name="firstName"
            onChange={(e) => handleChange(e)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            name="lastName"
            onChange={(e) => handleChange(e)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Position"
            name="position"
            onChange={(e) => handleChange(e)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Year"
            name="year"
            onChange={(e) => handleChange(e)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => twoFunction(updatedPlayer)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditDialog;
