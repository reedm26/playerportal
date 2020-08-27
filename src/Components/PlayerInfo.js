import React, { Component } from "react";
import {
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Table,
  TableContainer,
} from "@material-ui/core";

import propTypes from "prop-types";

class PlayerInfo extends Component {
  render() {
    const {
      id,
      number,
      firstName,
      lastName,
      position,
      year,
    } = this.props.player;

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
}
PlayerInfo.propTypes = {
  player: propTypes.object.isRequired,
};

export default PlayerInfo;
