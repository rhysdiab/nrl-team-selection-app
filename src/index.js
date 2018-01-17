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
//Priotity
  //stop logging in twice
  //create 2 separate facebook projects for dev and production
  //get local environment working on my iphone
  //create new app and change app ids and play with redirect urls

  //deploy current version for testing
      //fix facebok authentication issue on mobile
  //2nd priority work on screenshot functionality
    //complete cloud functions tutorial on react/redux firebase
    //find out if can be done with cloud functions

  //create screenshot functionality
    //go to serverless functions sections of front end masters and investigate
    //create a serverless function for screenshot functionality
  //convert into progressive web app
    //remove address bar
    //set up icon for homescreen and prompt to install
    //set up offline usage
    //set up push notifications

//Lower Priority
  //work out how to change the opacity of the background picture using photoshop/sketch/invision


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
