import React, { Component } from 'react';
import logo from './assets/icon.png';
import fam from './assets/fam.jpg';
import leia from './assets/leia.jpg'

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
        captionHeader:"Bad memories",
        caption:"Remembering when I had to babysit Legolas "

      },
      {
        user:leia,
        author: "Leia Skywalker",
        img: fam,
        captionHeader:"All Luke's fault",
        caption:"family portrait before Ben became whiny Kylo "
      }
    ]
  }
}
  render() {
    const listOfCards = this.state.listOfCards;
    const display = listOfCards.map((list,i) => (
      <li key={i} >
        <div className="container">
          <div className="row">
            <div className="iconUser">
                <div className="col-xs-6 col-sm-4">
                  <img  className="user" src={list.user}></img><br/><br/><br/><br/>
                </div>
            </div>
              <h1>  {list.author}</h1> <br/>
          </div>
          <div className="imgCap">
            <img src= {list.img} className="imgPost" ></img><br/>
            <div className="capHeader">{list.captionHeader}</div><br/>
            <div className="caption">{list.caption}<br/></div>
            <br/>
          </div>
       </div>
      </li>

    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
