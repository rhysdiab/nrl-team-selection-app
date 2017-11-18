
export const updateTeam = (initialTeam, playerMoved, playerDropped) => {

  return {
    type: 'UPDATE_TEAM',
    team: [playerMoved, playerDropped]
  };
};
