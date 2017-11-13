
export const updateTeam = (positionNumber) => {

  const newTeam = {players: null};

  return {
    type: 'UPDATE_TEAM',
    team: newTeam
  };
};

export default updateTeam;
