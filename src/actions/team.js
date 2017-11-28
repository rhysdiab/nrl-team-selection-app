import { database } from '../firebase';

const teamsRef = database.ref('teams');

//update redux state (called after saving to database)
export const updateReduxTeam = (key, { team, uid }) => {
  return {
    type: 'UPDATE_TEAM',
    key,
    team,
    uid
  };
};

//saves mew team ot the database
export const updateTeam = (newTeam, uid) => {
  return dispatch => {
    const latestTeam = {
      team: newTeam,
      uid
    };


    teamsRef.once('value').then(function(snapshot) {
      var key = snapshot.key; // "ada"
      var childKey = snapshot.child('-L-3Uc_KfTfm2DfS0EGU/uid').val();
      console.log(childKey);
      if (childKey)
      console.log(childKey);
    });
    teamsRef.remove();
    teamsRef.push(latestTeam);
  };
};

//receive players moved from drag and drop input and creates new team
export const createNewTeam = (initialTeam, playerMoved, playerDropped, uid) => {
  //algorithm which returns a new array with the new position of each player

  const playerMovedIndex = initialTeam.indexOf(playerMoved);
  const playerDroppedIndex = initialTeam.indexOf(playerDropped);

  const newTeam = [...initialTeam];

  newTeam.splice(playerMovedIndex, 1, playerDropped);
  newTeam.splice(playerDroppedIndex, 1, playerMoved);
  // newTeam.splice(playerDropped, 0, playerMoved);

  return updateTeam(newTeam, uid);
};

//event listener called when a new team is saved to the database
export const startListeningForTeams = () => {
  return dispatch => {
    teamsRef.on('child_added', snapshot => {
      dispatch(updateReduxTeam(snapshot.key, snapshot.val()));
    });
  };
};
