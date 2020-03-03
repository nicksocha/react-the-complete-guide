import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border: 2px solid #e3e3e3;
  border-radius: 1.5vw;
  box-shadow: 0 3px 5px #ffc600;
  font-family: 'Fira Code';
  margin: 2vh auto;
  padding: 1rem;
  max-width: 60vw;
`;

const person = props => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
