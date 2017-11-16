import initialState from '../initial-state';

export default function teamsReducer(state = initialState.team, action) {
  switch(action.type) {
    case 'UPDATE_TEAM':
      return(
        action.team
      );

    default:
      return state;
  }
}
