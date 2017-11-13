import { combineReducers } from 'redux';
import authReducer from './auth';
import usersReducer from './users';
import teamReducer from './team';


const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  team: teamReducer
});

export default reducer;
