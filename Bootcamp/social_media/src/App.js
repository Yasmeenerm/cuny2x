import React, { Component } from 'react';

import './App.css';

class App extends Component {
constructor(){
  super();
  this.state ={
    listOfCards:[
      {
        user: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/p200x200/11200805_10153889836504741_718631745012518813_n.jpg?_nc_cat=0&oh=42695b3b64fca687f1b9cc88cfecdc83&oe=5BC15A29",
        author: "Jack Sparrow",
        img: "http://screenfish.net/wp-content/uploads/2017/04/underboat.png",
        caption:"Good times with me boy"

      },
      {
        user:";",
        author: "Leia Skywalker",
        img: "im2",
        caption:"cap2"
      }
    ]
  }
}
  render() {
    const listOfCards = this.state.listOfCards;
    const display = listOfCards.map((list,i) => (
      <div className="box">
      <li key={i} className="boxContents">

      <img  align="left" height="50px" className="user" src={list.user}></img><br/><br/><br/><br/>
      <p>
      <h1>  {list.author}</h1> <br/>
        <img src= {list.img} className="imgPost" ></img><br/>
        {list.caption}<br/>
      <br/>
      </p>
      </li><br/>
      </div>

    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src="/icon.png" className="App-logo" alt="logo" />
          <h2 className="App-title">Tweeter</h2>
        </header>

        <ul>
          {(display) ? display : null}
        </ul>
      </div>
    );
  }
}

export default App;
