import initialState from '../initial-state';
import updateTeam from '../actions/team';

export default function teamsReducer(state = initialState.team, action) {
  switch(action.type) {
    case 'UPDATE_TEAM':
      return {
        team: action.team
      }
    default:
      return state;
  }
}
