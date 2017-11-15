import { combineReducers } from 'redux';
import authReducer from './auth';
import usersReducer from './users';
import teamsReducer from './team';

const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer
});

export default reducer;
