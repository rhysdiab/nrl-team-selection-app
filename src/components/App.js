import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
