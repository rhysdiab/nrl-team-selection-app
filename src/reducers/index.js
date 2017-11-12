import { combineReducers } from 'redux';
import authReducer from './auth';
import usersReducer from './users';
import updatePositionReducer from './updatePosition';


const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  updatePosition: updatePositionReducer
});

export default reducer;
