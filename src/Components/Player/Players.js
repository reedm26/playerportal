import React from "react";
import PlayerInfo from "./PlayerInfo";
import propTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function Players(props) {
  const tableStyle = {
    background: "black",
  };
  const textColor = {
    color: "white",
  };
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead style={tableStyle}>
            <TableRow>
              <TableCell style={textColor}>#</TableCell>
              <TableCell style={textColor}>First Name</TableCell>
              <TableCell style={textColor}>Last Name</TableCell>
              <TableCell style={textColor}>Position</TableCell>
              <TableCell style={textColor}>Year</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          {props.players.map((player) => (
            <PlayerInfo
              player={player}
              key={props.id}
              deleteplayer={props.deleteplayer}
              editPlayer={props.editPlayer}
            />
          ))}
        </Table>
      </TableContainer>
    </>
  );
}
Players.propTypes = {
  players: propTypes.array.isRequired,
};
export default Players;
