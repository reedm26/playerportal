import React from "react";
import propTypes from "prop-types";
import { TableRow, TableCell, TableBody } from "@material-ui/core";

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
      </TableRow>
    </TableBody>
  );
}

PlayerInfo.propTypes = {
  player: propTypes.object.isRequired,
};

export default PlayerInfo;
