
export const updateTeam = (playerMoved, playerDropped) => {
  
  return {
    type: 'UPDATE_TEAM',
    team: [playerMoved, playerDropped]
  };
};
