import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>WOW!!! This is React!!!</h1>
      <p className={assignedClasses.join(' ')}>
        It is really working! Kinda...
      </p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <p>Maybe...</p>
    </div>
  );
};

export default cockpit;
