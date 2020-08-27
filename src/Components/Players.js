import React, { Component } from "react";
import PlayerInfo from "./PlayerInfo";
import propTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

class Players extends Component {
  render() {
    const tableStyle = {
      maxWidth: "fill",
    };
    return (
      <>
        <TableContainer style={tableStyle}>
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
              <div key={player.id}>
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
