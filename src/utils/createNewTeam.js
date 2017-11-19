export const createNewTeam = (initialTeam, playerMoved, playerDropped) => {
  //algorithm which returns an array which replaces the position of
    //the selected player and pushes every player below the drop source down one
    //target

  const playerMovedIndex = initialTeam.indexOf(playerMoved);
  const playerDroppedIndex = initialTeam.indexOf(playerDropped);

  const newTeam = [];


  //determine whether playing being moved top to bottom or bottom to top
  if (playerMovedIndex > playerDroppedIndex) {
      //algorithm for players being moved from bottom to top
    for (var i = 0; i < playerDroppedIndex; i++) {
      const currentPlayer = initialTeam[i];
      newTeam.push(currentPlayer);
    }

    newTeam.push(playerMoved);
    newTeam.push(playerDropped);

    for (var x = playerDroppedIndex + 2; x < initialTeam.length; x++) {
      const currentPlayer = initialTeam[x];
      newTeam.push(currentPlayer)
    }

    console.log(newTeam);
  } else {
    // algorithm for players being moved from top to bottom
    for (var y = initialTeam.length - 1; y > playerDroppedIndex; y--) {
      const currentPlayer = initialTeam[y];
      newTeam.unshift(currentPlayer);
    }

    newTeam.unshift(playerMoved);
    newTeam.unshift(playerDropped);

    //TODO fix this for loos
    let flexiblePlayerMovedIndex;
    if (playerMovedIndex - 1 === -1) {
      flexiblePlayerMovedIndex = 0;
    } else {
      flexiblePlayerMovedIndex = playerMovedIndex - 1;
    }

    for (var z = flexiblePlayerMovedIndex; z >= 0; z--) {
      const currentPlayer = initialTeam[x];
      console.log(currentPlayer);
      newTeam.unshift(currentPlayer);
    }

    console.log(newTeam);
  }
}
