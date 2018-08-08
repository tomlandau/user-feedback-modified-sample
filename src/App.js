import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserFeedback from './UserFeedback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">User Feedback Sample App</h1>
        </header>
        <UserFeedback></UserFeedback>
      </div>
    );
  }
}

export default App;
