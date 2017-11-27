import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.scss';
import initialState from './initial-state';
import reducer from './reducers';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { startListeningToAuthChanges } from './actions/auth';
import { startListeningForUsers } from './actions/users';
import { startListeningForTeams } from './actions/team';

//TODO
  //figure out best way to update redux state and clean up code in updating database and state

  //figure out what map error is
  //on drop, model create team action,
  //1) create createNewTeam action which creates a new team object, and pushes team and uid to database DONE
  //2) create startListeningForTeamChanges function which listens for additions to the database, takes a snapshot
  //and calls a function to update the redux state PARTIALLYDONE
  //3) create a function which updates the redux state to display to users TODO
  //4) replace initialState object with database reference to that persons team to show their team when the page rerenders
  //This will activate the startListeningForTeamChanges
      //save new team to database
      //delete current database records
      //make site render most recent info from database on load
  //enable facebook authentication
  //find package for creating screenshot
  //create css for isHovered over to cause small movement
  //make card being dragged dissappear (is isDragging, add css display: none)


injectTapEventPlugin();

const middleware = [ thunk ];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
  )
);

ReactDOM.render(<Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

store.dispatch(startListeningToAuthChanges());
store.dispatch(startListeningForUsers());
store.dispatch(startListeningForTeams());
