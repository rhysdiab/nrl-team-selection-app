import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.scss';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <MultiThemeProvider>
        <div className="App">
          <div>
            <SignIn />
          </div>
        </div>
      </MultiThemeProvider>
    );
  }
}

export default App;
