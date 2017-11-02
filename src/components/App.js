import React from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.scss';
import SignIn from './SignIn';
import Loading from './Loading';

const App = ({ auth, signIn, signOut }) => {
  return (
    <MultiThemeProvider>
      <main className="Application">
        <div className="Application--sidebar">
          { auth.status === 'ANONYMOUS' && <SignIn signIn={signIn}/> }
          { auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading /> }
          <Loading />
        </div>
      </main>
    </MultiThemeProvider>
  );
};
export default App;
