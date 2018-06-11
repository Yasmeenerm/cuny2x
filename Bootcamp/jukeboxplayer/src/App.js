import React, { Component } from 'react';
import { PlayButton, PauseButton } from 'react-player-controls'
import Player from './Player.js';
import logo from './images/logo.png';
import sue from './music/sue.mp3'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      currentSong:0,
      playList:[
        {
          author:"Johnny Cash",
          coverArt:"someImg",
          song_url: {sue},
          song_title: "A boy named Sue",
          playing: false,
          trackIndex:0,
        }
      ]
    }
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrev(){
    const nextSong= this.currentSong -1;
    if(this.state.currentSong > 0){
      this.setState({currentSong : nextSong});
    }
    else{
      console.log("no previous song")
    }
  }

  handleNext(){
    const nextSong = this.currentSong +1;
    if(this.state.currentSong < this.state.playList.length-1){
      this.setState({currentSong: nextSong});
    }
  }
  render() {

    return (
      <div className="App">
        <h1 className="App-title">JUKEBOX</h1>
          <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
      {
      this.state.playList.length
        ? <Player
            currentSongUrl={this.state.playList[this.state.currentSong].song_url}
            currentSongTitle={this.state.playList[this.state.currentSong].song_title}
            playPrev={this.handlePrev}
            playNext={this.handleNext}
          />

        : null
    }
    <audio
      src={this.state.currentSongUrl}
       autoPlay={this.state.isPlaying}>Your browser does not support the <code>audio</code> element.
    </audio>
        </p>
      </div>
    );
  }
}

export default App;
