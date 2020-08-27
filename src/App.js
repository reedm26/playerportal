import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import PlayerCards from "./Components/PlayerCards";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayerCards />
      </div>
    );
  }
}

export default App;
