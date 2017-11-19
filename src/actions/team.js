
export const updateTeam = (newTeam) => {
  return {
    type: 'UPDATE_TEAM',
    team: newTeam
  };
};

export const createNewTeam = (initialTeam, playerMoved, playerDropped) => {
  //algorithm which returns a new array with the new position of each player

  const playerMovedIndex = initialTeam.indexOf(playerMoved);
  const playerDroppedIndex = initialTeam.indexOf(playerDropped);

  const newTeam = [];

  //determine whether playing being moved top to bottom or bottom to top
  if (playerMovedIndex > playerDroppedIndex) {
    //algorithm for players being moved from bottom to top
    //Get all players above the player dropped
    for (var i = 0; i < playerDroppedIndex; i++) {
      const currentPlayer = initialTeam[i];
      newTeam.push(currentPlayer);
    }

    //push in player moved above player dropped
    newTeam.push(playerMoved, playerDropped);

    //get all players below player dropped
    for (var x = playerDroppedIndex + 1; x < initialTeam.length; x++) {
      const currentPlayer = initialTeam[x];

      //don't push in playerMoved twice
      if (currentPlayer !== playerMoved) {
        newTeam.push(currentPlayer);
      }
    }
    return updateTeam(newTeam);
  } else {
    // algorithm for players being moved from top to bottom
    //Go through all players below the player dropped and unshift them to front of array
    for (var y = initialTeam.length - 1; y > playerDroppedIndex; y--) {
      const currentPlayer = initialTeam[y];
      newTeam.unshift(currentPlayer);
    }

    //Put the player moved below the player dropped at the front of array
    newTeam.unshift(playerMoved);
    newTeam.unshift(playerDropped);

    //go through all players above the player dropped
    for (var z = playerDroppedIndex - 1; z >= 0; z--) {
      const currentPlayer = initialTeam[z];
      //don't put in the player moved twice
      if (currentPlayer !== playerMoved) {
        newTeam.unshift(currentPlayer);
      }
    }
    return updateTeam(newTeam);
  }
};
