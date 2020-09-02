import React, { useState, useEffect } from "react";

function UsePersistedState(key, playersState) {
  const [state, setPlayersState] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || playersState
  );
  useEffect(() => {
    localStorage.setItem(key, setPlayersState);
  }, [key, playersState]);
  return [playersState, setPlayersState];
}

export default UsePersistedState;
