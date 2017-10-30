import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import SignIn from './SignIn'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <SignIn />
        </div>
      </div>
    );
  }
}

export default App;
