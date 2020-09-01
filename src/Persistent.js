import React, { useState, useEffect } from "react";

function usePersistedState(key, playersState) {
  const [state, setPlayerState] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || playersState
  );
  useEffect(() => {
    localStorage.setItem(key, setPlayersState);
  }, [key, playersState]);
  return [playersState, setPlayersState];
}
