import React from "react";
import propTypes from "prop-types";
import { TableRow, TableCell, TableBody, Fab } from "@material-ui/core";

const iconStyle = {
  margin: "2px",
  float: "right",
};
function PlayerInfo(props) {
  const { id, number, firstName, lastName, position, year } = props.player;
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
            color="secondary"
            aria-label="add"
            style={iconStyle}
            onClick={props.deleteplayer.bind(this, id)}
          >
            X
          </Fab>
          <Fab color="primary" aria-label="edit" style={iconStyle}>
            edit
          </Fab>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

PlayerInfo.propTypes = {
  player: propTypes.object.isRequired,
};

export default PlayerInfo;
