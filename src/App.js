import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Players from "./Components/Player/Players";
import { Component } from "react";
import TeamCard from "./Components/Team/TeamCard";
import { TextField, Button } from "@material-ui/core";
const buttonStyle = {
  background: "#ccc",
  margin: "4px",
};
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

  switchNameHandler = () => {
    // console.log("Bang");
    this.setState({
      players: [
        {
          id: 1,
          number: "24",
          firstName: "Cole",
          lastName: "Baker",
          position: "Midfielder",
          year: "So",
        },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Button style={buttonStyle} onClick={this.switchNameHandler}>
          New Player
        </Button>
        <Players players={this.state.players} />
        <TeamCard />
      </div>
    );
  }
}

export default App;
