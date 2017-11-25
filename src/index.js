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

//TODO
  //create algorithm to replace player on drop rather than move them around
    //work on createTeam2 to replace rather than move around
  //on drop,
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
