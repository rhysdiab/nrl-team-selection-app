
export const updateTeam = (initialTeam, playerMoved, playerDropped) => {

  //algorithm which returns an array which replaces the position of
    //the selected player and pushes every player below the drop source down one
    //target
  const newTeam = [];
  const playerMovedIndex = initialTeam.indexOf(playerMoved);
  const playerDroppedIndex = initialTeam.indexOf(playerDropped);

  //write condition to determine if player being moved up or down

  if (playerMovedIndex > playerDroppedIndex) {
    //write algorithm for moving players up

    const newArrayUnchanged

  } else {
    return console.log('try again');
  }

  return {
    type: 'UPDATE_TEAM',
    team: [playerMoved, playerDropped]
  };
};
