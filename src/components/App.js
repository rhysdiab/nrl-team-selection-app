import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.scss';
import SignIn from './SignIn';
import Loading from './Loading';
import CurrentUser from './CurrentUser';

class App extends Component {
  render() {
    const { auth, signIn, signOut, team, createNewTeam } = this.props;
    return (
      <MultiThemeProvider>
        <main className="Application">
          <div className="Application--sidebar">
            {auth.status === 'ANONYMOUS' && <SignIn signIn={signIn} />}
            {auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading />}
            {auth.status === 'SIGNED_IN' &&
              <CurrentUser auth={auth} signOut={signOut} createNewTeam={createNewTeam} team={team} />}
          </div>
        </main>
      </MultiThemeProvider>
    );
  }
}

export default DragDropContext(TouchBackend)(App);
