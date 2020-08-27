import React, { Component } from "react";
import PlayerInfo from "./PlayerInfo";
import propTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";

class Players extends Component {
  render() {
    return (
      <>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Year</TableCell>
              </TableRow>
            </TableHead>

            {this.props.players.map((player) => (
              <div>
                <PlayerInfo player={player} />
              </div>
            ))}
          </Table>
        </TableContainer>
      </>
    );
  }
}
Players.propTypes = {
  players: propTypes.array.isRequired,
};
export default Players;
