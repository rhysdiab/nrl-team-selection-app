import initialState from '../initial-state';
import extend from 'lodash/extend';
import clone from 'lodash/clone'

export default function updatePosition(state = initialState.position, action) {
  switch(action.type) {
    case 'UPDATE_POSITION':
      return extend(clone(state), { [action.uid]: {
        positionNumber: action.positionNumber
      }});
    default:
      return state;
  }
}
