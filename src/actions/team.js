
export const updateTeam = (playerMoved, playerDropped) => {

  console.log('update team action was called');

  return {
    type: 'UPDATE_TEAM',
    team: [playerMoved, playerDropped]
  };
};
