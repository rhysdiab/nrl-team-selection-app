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

//TODO create a PositionNumber component (similar to the square in the example) and put the player name as a child component
//Develop plan to to manage the state of the player position and how it should change or not change in respones to inputs

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
