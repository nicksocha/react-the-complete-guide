import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background: ${props =>
    props.alt
      ? 'linear-gradient(to bottom, #adebad 5%, #999999 100%)'
      : 'linear-gradient(to bottom, #999999 5%, #ff99c2 100%)'};
  border-radius: 15px;
  border: none;
  box-shadow: 0px 3px 5px 0px #ffc600;
  color: #000;
  cursor: pointer;
  display: inline-block;
  font-family: BioRhyme;
  font-size: 1.5vw;
  outline: none;
  padding: 7px 25px;
  text-decoration: none;
  &:hover {
    background: ${props =>
      props.alt
        ? 'linear-gradient(to bottom, #84e184 5%, #999999 100%)'
        : 'linear-gradient(to bottom, #999999 5%, #ff66a3 100%)'};
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    person[personIndex] = person;
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.nameChangedHandler(event, person.id)}
            />
          ))}
        </div>
      );
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>WOW!!! This is React!!!</h1>
        <p className={classes.join(' ')}>It is really working! Kinda...</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        <p>Maybe...</p>
        {persons}
      </div>
    );
  }
}

export default App;
