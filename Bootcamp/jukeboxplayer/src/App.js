import React, { Component } from 'react';
import logo from './images/logo.png';
import sue from './music/sue.mp3'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      playList:[
        {
          author:"Johnny Cash",
          coverArt:"someImg",
          song: {sue}
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">JUKEBOX</h1>
          <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
