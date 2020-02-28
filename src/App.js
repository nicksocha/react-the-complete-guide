import React from "react";
import "./styles.css";
import Person from './Person/Person';

export default function App() {
  state = {
    persons:[
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked');
  }

  return (
    <div className="App">
      <h1 className="test">This is a test!</h1>
      <p>How are we doing?</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'))
}
