import initialState from '../initial-state';

export default function teamsReducer(state = initialState.teams.team, action) {
  console.log(action);
  switch(action.type) {
    case 'UPDATE_TEAM':
      return({
        key: action.key,
        team: action.team,
        uid: action.uid
      });

    default:
      return state;
  }
}
