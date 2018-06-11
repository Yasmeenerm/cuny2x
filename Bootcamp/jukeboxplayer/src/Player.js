import React, { Component } from 'react';
import sue from './music/sue.mp3';
import './Player.css';


class Player extends Component {

  constructor() {
    super();
    this.state ={
      currentSong:0,
      playList:[
        {
          author:"Johnny Cash",
          coverArt:"someImg",
          song_url: {sue},
          song_title: "A boy named Sue",
          isPlaying: false,
          trackIndex:0,
        }
      ]
  }
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    this.state.isPlaying ? this.refs.player.pause() : this.refs.player.play();
    this.setState({isPlaying: !this.state.isPlaying});
  }


  render() {
    return (
      <div className="player-controls">

        <div className="icons-container">

          <i className="material-icons" onClick={this.props.playPrev}>skip_previous</i>
          <i
            className="material-icons play"
            ref="play"
            onClick={this.handlePlay}>
            {this.state.isPlaying ? "pause_circle_outline" : "play_circle_outline"}
          </i>
          <i className="material-icons" onClick={this.props.playNext}>skip_next</i>
        </div>

        <audio
          src={this.state.currentSongUrl}
          ref="player"
           autoPlay={this.state.isPlaying}>Your browser does not support the <code>audio</code> element.
        </audio>


      </div>
    );
  }
}

export default Player;
