import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super();
  //keeps track of all changes
  this.state = {
    name: "",
    listOfNames: []
  }
}
//removees items in a listOfNames

//captures the name you put input field
handleChange(event){
  const name= event.target.value;
  this.setState({
    name
  })
  console.log("this is the name in the handleChange: ", this.state.name)
}

clearName (i, event){
  let index = i;
  let listOfNames = this.state.listOfNames;
  //use filter method to remove item
  var updatedListOfNames = listOfNames.filter((item,i,array) =>
  {
     return item !== array[index];
   });

  //update the state
  this.setState({
    //update original list with new list
    listOfNames: updatedListOfNames
  })
}

starName (i, event){
  let listOfNames = this.state.listOfNames;
  //we toggle the value of the given index
  listOfNames[i].isStarred = !listOfNames[i].isStarred;
  this.setState({
    //because its the same name we dont need to do listOfNames : listOfNames
    listOfNames
  })

}

handleSubmit(event){
  //prevents page from reloading
  event.preventDefault();
  //push the name to the list
  //immutiable (cant change) unless you use this.setState
  const name = this.state.name;
  let updatedListOfNames = this.state.listOfNames;
  updatedListOfNames.push({name, isStarred: false});
  //you can only update this.state with setState
  this.setState({
    //update original list with new list
    listOfNames: updatedListOfNames
  })
  console.log("this is the new list of names", this.state.listOfNames)
}

  render() {
    const listOfNames = this.state.listOfNames;
    //put each name in the li tag and returns it
    //we want to be able to use it later in JSX so we store it in const
    const name =listOfNames.map((list, i) => (<li key ={i} ><i
      className={(list.isStarred)? "fas fa-star" :"far fa-star"}
      onClick={this.starName.bind(this,i)}></i><span></span>
      {list.name}<span> </span>
      <i onClick={this.clearName.bind(this, i)} className = "fas fa-window-close"> </i></li>
    ));
    return (
      <div className="App">
        <h2>
         some ToDo-list app!
        </h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Task:
            <input onChange={this.handleChange.bind(this)} type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {(name) ? name :null}
        </ul>
      </div>
    );
  }
}

export default App;
