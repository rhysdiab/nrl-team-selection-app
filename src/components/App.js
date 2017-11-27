import React, { Component } from 'react';
import objectAssign from 'object-assign';
import { DragDropContext } from 'react-dnd';
import MultiBackend, { Preview } from 'react-dnd-multi-backend';
// import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch'; // or any other pipeline

import { createTransition } from 'react-dnd-multi-backend';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';

import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.scss';
import SignIn from './SignIn';
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
  generatePreview(type, item, style) {
   objectAssign(style, {backgroundColor: '#B80002', width: '110px', padding: '5px', borderRadius: '10%', color: 'white', fontSize: '12px'});
   return (
     <div style={style}>{item.player}</div>
   );
 }

  render() {
    const { auth, signIn, signOut, team, createNewTeam } = this.props;
    return (
      <MultiThemeProvider>
        <main className="Application">
          <div className="Application--sidebar">
            {auth.status === 'ANONYMOUS' && <SignIn signIn={signIn} />}
            {auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading />}
            {auth.status === 'SIGNED_IN' &&
              <CurrentUser key={auth.uid} auth={auth} signOut={signOut} createNewTeam={createNewTeam} team={team} />}
          </div>
          <Preview generator={this.generatePreview} />
        </main>
      </MultiThemeProvider>
    );
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(App);
