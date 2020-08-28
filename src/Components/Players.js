import React, { Component } from "react";
import PlayerInfo1 from "./PlayerInfo";
import propTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

class Players extends Component {
  render() {
    const tableStyle = {
      background: "black",
    };
    const textColor = {
      color: "white",
    };

    return (
      <>
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={tableStyle}>
              <TableRow>
                <TableCell style={textColor}>#</TableCell>
                <TableCell style={textColor}>First Name</TableCell>
                <TableCell style={textColor}>Last Name</TableCell>
                <TableCell style={textColor}>Position</TableCell>
                <TableCell style={textColor}>Year</TableCell>
              </TableRow>
            </TableHead>
            {this.props.players.map((player) => (
              <PlayerInfo1 player={player} />
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
