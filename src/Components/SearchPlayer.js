import React from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@material-ui/core";

const search = {
  float: "right",
  margin: "6px",
};
function SearchPlayer(props) {
  return (
    <div>
      <form action="">
        <TextField
          id="outlined-basic"
          label="search..."
          variant="outlined"
          style={search}
        ></TextField>
      </form>
    </div>
  );
}

SearchPlayer.propTypes = {};

export default SearchPlayer;
