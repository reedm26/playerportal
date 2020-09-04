import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Players from "./Components/Player/Players";
import TeamCard from "./Components/Team/TeamCard";
import PlayerForum from "./Components/Player/PlayerForum";
import EditDialog from "./Components/EditDialog";
import UsePersistedState from "./Persistent";
// import SearchPlayer from "./Components/SearchPlayer";
import { Button, TextField } from "@material-ui/core";

const searchStyle = {
  float: "right",
  margin: "6px",
};

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
    searchField: [],
  });

  const formSubmitHandler = (newPlayer) => {
    const players = playersState.players;
    setPlayersState({
      players: [...players, newPlayer],
    });
  };

  const deletePlayer = (id) => {
    const players = playersState.players.filter((player) => player.id !== id);
    setPlayersState({
      players: players,
    });
  };

  const editPlayer = (updatedPlayer) => {
    const player = playersState.players.filter(
      (player) => player.id === updatedPlayer.id
    );
    const playerIndex = playersState.players.indexOf(player[0]);
    let updatedPlayers = playersState.players;
    updatedPlayers[playerIndex] = updatedPlayer;
    setPlayersState({
      players: updatedPlayers,
    });
  };

  const [searchField, setSearchState] = useState(playersState.searchField);
  const handleSearchChange = (event) => {
    console.log("here", event.target.value);
    setSearchState({
      ...searchField,
      [event.target.name]: event.target.value,
    });
  };

  const searchPlayer = (searchField) => {
    console.log("maybe", searchField);
    const filteredPlayer = playersState.players.filter((players) =>
      players.firstName.toLowerCase().includes(searchField).toString()
    );
    console.log("filtered", filteredPlayer);
    setSearchState({
      searchField: filteredPlayer,
    });
  };

  return (
    <div className="App">
      <NavBar />
      <PlayerForum click={formSubmitHandler} players={playersState.players} />
      <Players
        players={playersState.players}
        deleteplayer={deletePlayer}
        editPlayer={editPlayer}
      />
      {/* <SearchPlayer onSearchChange={handleSearchChange} search={searchedPlayer}/> */}
      <div>
        <form>
          <TextField
            id="outlined-basic"
            label="search..."
            variant="outlined"
            name="searchField"
            style={searchStyle}
            onChange={handleSearchChange}
          ></TextField>
          <Button
            onClick={() => searchPlayer(searchField)}
            color="primary"
            style={searchStyle}
          >
            Search
          </Button>
        </form>
      </div>
      <TeamCard />
    </div>
  );
};
export default App;
