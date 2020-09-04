import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@material-ui/core";

const searchStyle = {
  float: "right",
  margin: "6px",
};
function SearchPlayer(props) {
  const { search } = props;
  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="search..."
          variant="outlined"
          name="searchedPlayer"
          style={searchStyle}
          // onChange={onSearchChange}
        >
          {search}
        </TextField>
      </form>
    </div>
  );
}

SearchPlayer.propTypes = {};

export default SearchPlayer;
