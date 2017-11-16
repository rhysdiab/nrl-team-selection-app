import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.scss';
import SignIn from './SignIn';
import Loading from './Loading';
import CurrentUser from './CurrentUser';

class App extends Component {
  render() {
    const { auth, signIn, signOut, updateTeam } = this.props;
    return (
      <MultiThemeProvider>
        <main className="Application">
          <div className="Application--sidebar">
            {auth.status === 'ANONYMOUS' && <SignIn signIn={signIn} />}
            {auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading />}
            {auth.status === 'SIGNED_IN' &&
              <CurrentUser auth={auth} signOut={signOut} updateTeam={updateTeam} />}
          </div>
        </main>
      </MultiThemeProvider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
