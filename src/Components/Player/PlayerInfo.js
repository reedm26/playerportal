import React, { useState } from "react";
import propTypes from "prop-types";
import { TableRow, TableCell, TableBody, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CreateIcon from "@material-ui/icons/Create";
import EditDialog from "../EditDialog";

const iconStyle = {
  margin: "2px",
  float: "right",
  fontSize: "7pt",
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
}));

function PlayerInfo(props) {
  const { id, number, firstName, lastName, position, year } = props.player;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (event) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableBody>
      <TableRow key={id}>
        <TableCell>{number}</TableCell>
        <TableCell>{firstName}</TableCell>
        <TableCell>{lastName}</TableCell>
        <TableCell>{position}</TableCell>
        <TableCell>{year}</TableCell>
        <TableCell>
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            style={iconStyle}
            onClick={props.deleteplayer.bind(this, id)}
          >
            <DeleteForeverIcon fontSize="small" />
          </Fab>
          <Fab
            size="small"
            color="primary"
            aria-label="edit"
            style={iconStyle}
            onClick={handleClickOpen}
          >
            <CreateIcon fontSize="small" />
          </Fab>
        </TableCell>
        <EditDialog
          open={open}
          handleClose={handleClose}
          editPlayer={props.editPlayer}
          player={props.player}
        />
      </TableRow>
    </TableBody>
  );
}

PlayerInfo.propTypes = {
  player: propTypes.object.isRequired,
};
export default PlayerInfo;
