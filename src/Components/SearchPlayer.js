import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@material-ui/core";
import PlayerInfo from "./Player/PlayerInfo";

const searchStyle = {
  float: "right",
  margin: "6px",
};
function SearchPlayer(props) {
  const [searchField, setSearchState] = useState(props.player);

  const enter = (event) => {
    if (event.key === 13) {
      props.search(props.player);
    }
  };

  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="search..."
          variant="outlined"
          name="searchField"
          style={searchStyle}
          onChange={props.onSearchChange}

          // onKeyDown={(e) => enter(e)}
        ></TextField>
        <Button
          onClick={(e) => props.search(props.player)}
          color="primary"
          style={searchStyle}
          name={props.enter}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

SearchPlayer.propTypes = {};

export default SearchPlayer;
