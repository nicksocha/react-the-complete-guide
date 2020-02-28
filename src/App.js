import React from "react";
import "./styles.css";
import Person from './Person/Person';

export default function App() {
  return (
    <div className="App">
      <h1 className="test">This is a test!</h1>
      <p>How are we doing?</p>
      <Person />
    </div>
  );
  // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'))
}
