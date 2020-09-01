import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Players from "./Components/Player/Players";
import TeamCard from "./Components/Team/TeamCard";
import PlayerForum from "./Components/Player/PlayerForum";

const App = (props) => {
  const [playersState, setPlayersState] = useState({
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
  });

  const formSubmitHandler = (newPlayer) => {
    playersState.players.push(newPlayer);
    setPlayersState({
      players: playersState.players,
    });
  };

  const deletePlayer = (id) => {
    setPlayersState({
      players: [...playersState.players.filter((players) => players.id !== id)],
    });
  };
  return (
    <div className="App">
      <NavBar />
      <PlayerForum click={formSubmitHandler} players={playersState.players} />

      <Players players={playersState.players} deleteplayer={deletePlayer} />
      <TeamCard />
    </div>
  );
};

export default App;
