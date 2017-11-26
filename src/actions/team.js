import { database } from '../firebase';

const teamsRef = database.ref('teams');

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

    const newTeam = [...initialTeam];

    newTeam.splice(playerMovedIndex, 1, playerDropped);
    newTeam.splice(playerDroppedIndex, 1, playerMoved);
    // newTeam.splice(playerDropped, 0, playerMoved);
    return updateTeam(newTeam);
};
