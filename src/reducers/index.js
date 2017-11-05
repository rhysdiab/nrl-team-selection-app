import { combineReducers } from 'redux';
import authReducer from './auth';
import usersReducer from './users';
import teamsReducer from './teams';


const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  teams: teamsReducer
});

export default reducer;
