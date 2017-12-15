import React, { Component } from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';
import { DragDropContext } from 'react-dnd';
import MultiBackend, { Preview } from 'react-dnd-multi-backend';
import { createTransition } from 'react-dnd-multi-backend';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';

import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.scss';
import SignInPage from './SignInPage';
import Loading from './Loading';
import CurrentUser from './CurrentUser';

const TouchTransition = createTransition('touchstart', (event) => {
  return event.touches != null;
});

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend
    },
    {
      backend: TouchBackend({enableMouseEvents: true}), // Note that you can call your backends with options
      preview: true,
      transition: TouchTransition
    }
  ]
};



class App extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    teams: PropTypes.object.isRequired,
    createNewTeam: PropTypes.func.isRequired
  };

  generatePreview(type, item, style) {
   objectAssign(style, {backgroundColor: 'blue', width: '130px', padding: '5px', borderRadius: '10%', color: 'white', fontSize: '12px'});
   return (
     <div style={style}>{item.player}</div>
   );
 }

  render() {
    const { auth, signIn, signOut, signInWithFacebook, teams, createNewTeam, startListeningForFacebookAuthChange } = this.props;
    return (
      <MultiThemeProvider>
        <main className="Application">
          <div className="Application--sidebar">
            {auth.status === 'ANONYMOUS' &&
            <SignInPage signIn={signIn} signInWithFacebook={signInWithFacebook} startListeningForFacebookAuthChange={startListeningForFacebookAuthChange} />
            }
            {auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading />}
            {auth.status === 'SIGNED_IN' &&
              <CurrentUser key={auth.uid} auth={auth} signOut={signOut} createNewTeam={createNewTeam} teams={teams} />}
          </div>
          <Preview generator={this.generatePreview} />
        </main>
      </MultiThemeProvider>
    );
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(App);
