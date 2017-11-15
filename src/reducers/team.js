import initialState from '../initial-state';


export default function usersReducer(state = initialState.team, action) {
  switch(action.type) {
    case 'UPDATE_TEAM':
      return {
        team: action.team
      }
    default:
      return state;
  }
}
