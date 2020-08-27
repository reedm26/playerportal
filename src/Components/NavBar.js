import React, { Component } from "react";
const navBarStyle = {
  background: "#ffc787",
  boarder: "none",
};
class NavBar extends Component {
  render() {
    return (
      <div style={navBarStyle}>
        <h1>Player Info</h1>
      </div>
    );
  }
}
export default NavBar;
