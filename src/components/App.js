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
            <SignIn />
           <Loading />
        </div>
      </main>
    </MultiThemeProvider>
  );
};
export default App;
