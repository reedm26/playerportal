import React, { Component } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
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
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>First Name</TableCell>{" "}
                <TableCell>Last Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Year</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={id}>
                <TableCell>{number}</TableCell>
                <TableCell>{firstName}</TableCell>
                <TableCell>{lastName}</TableCell>
                <TableCell>{position}</TableCell>
                <TableCell>{year}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
PlayerInfo.propTypes = {
  player: propTypes.object.isRequired,
};

export default PlayerInfo;
