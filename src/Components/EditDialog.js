import React from "react";
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
  return (
    <div>
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">HI{props.id}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="#"
            name="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            name="firstName"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            name="lastName"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Position"
            name="position"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Year"
            name="year"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditDialog;
