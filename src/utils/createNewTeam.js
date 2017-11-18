export const createNewTeam = (initialTeam, playerMoved, playerDropped) => {
  //algorithm which returns an array which replaces the position of
    //the selected player and pushes every player below the drop source down one
    //target

  const playerMovedIndex = initialTeam.indexOf(playerMoved);
  const playerDroppedIndex = initialTeam.indexOf(playerDropped);

  const newTeam = [];

  //write condition to determine if player being moved up or down

  if (playerMovedIndex > playerDroppedIndex) {
      //write algorithm for moving players up
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
    //TODO write algorithm for players being dropped
    return console.log('try again');
  }
}
