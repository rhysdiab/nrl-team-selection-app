import initialState from '../initial-state';
import extend from 'lodash/extend';
import clone from 'lodash/clone'


export default function teamReducer(state = initialState.team, action) {
  switch(action.type) {
    case 'UPDATE_POSITION':
      return extend(clone(state), { [action.team]: {
        team: action.team
      }});
    default:
      return state;
  }
}
