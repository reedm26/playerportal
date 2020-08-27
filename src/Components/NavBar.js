import React, { Component } from "react";

const navBarStyle = {
  background: "#421e4c",
  boarder: "none",
  color: "#FFFFFF",
};
class NavBar extends Component {
  render() {
    return (
      <div style={navBarStyle}>
        <h1>Roster</h1>
      </div>
    );
  }
}
export default NavBar;
