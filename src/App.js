import React from "react";
import "./styles.css";
import styled, { css } from "styled-components";

export default function App() {
  const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}; */
`;

  const IshaanButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;

  const Card = styled.div`
    /* Adapt the colors based on primary prop */
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  const NormalDiv = styled(Card)`
    color: blue;
    border-color: blue;
  `;

  // Styles componenets List 1 Div 2 Button 3

  return (
    <div className="App">
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <IshaanButton>Ishaan</IshaanButton>
      <NormalDiv>Div</NormalDiv>
    </div>
  );
}
