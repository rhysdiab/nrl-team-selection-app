
export const updateTeam = (playerMoved, playerDropped) => {
  console.log(playerMoved, playerDropped);
  return {
    type: 'UPDATE_TEAM',
    team: [playerMoved, playerDropped]
  };
};
