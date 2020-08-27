import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Players from "./Components/Players";
import { Component } from "react";

class App extends Component {
  state = {
    players: [
      {
        id: 1,
        number: "24",
        firstName: "Corey",
        lastName: "Brady",
        position: "Midfielder",
        year: "Sr",
      },
      {
        id: 2,
        number: "2",
        firstName: "Dee",
        lastName: "Joyce",
        position: "Goalie",
        year: "Jr",
      },
      {
        id: 3,
        number: "4",
        firstName: "Brad",
        lastName: "Stew",
        position: "Midfielder",
        year: "Fr",
      },
      {
        id: 4,
        number: "13",
        firstName: "Austin",
        lastName: "Mendi",
        position: "Attack",
        year: "So",
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default App;
