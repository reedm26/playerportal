import React, { Component } from "react";

const navBarStyle = {
  background: "#421e4c",
  margin: "auto",
  color: "#FFFFFF",
  height: "75px",
};
class NavBar extends Component {
  render() {
    return <h1 style={navBarStyle}>Roster</h1>;
  }
}
export default NavBar;
