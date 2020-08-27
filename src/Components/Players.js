import React, { Component } from "react";
import PlayerInfo from "./PlayerInfo";
import propTypes from "prop-types";

class Players extends Component {
  render() {
    return this.props.players.map((player) => (
      <div>
        <PlayerInfo player={player} />
      </div>
    ));
  }
}
Players.propTypes = {
  players: propTypes.array.isRequired,
};
export default Players;
