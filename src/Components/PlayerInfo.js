import React from "react";
import propTypes from "prop-types";
import { TableRow, TableCell } from "@material-ui/core";

function PlayerInfo(props) {
  const { id, number, firstName, lastName, position, year } = props.player;
  return (
    <TableRow key={id}>
      <TableCell>{number}</TableCell>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{position}</TableCell>
      <TableCell>{year}</TableCell>
    </TableRow>
  );
}

PlayerInfo.propTypes = {
  player: propTypes.object.isRequired,
};

export default PlayerInfo;
