import React, { useState } from "react";

const TEXT_GOOD = "good";
const TEXT_NEUTRAL = "neutral";
const TEXT_BAD = "bad";
const SPACING = 1;

const handleClick = (buttonPressed, setterFunction, stateValue) => {

  setterFunction(stateValue + 1);
  console.log("button pressed [", buttonPressed, "]");

};

const Button = (props) => {
  return (<><button style={{ marginRight: SPACING + "em" }} onClick={props.onClick}>{props.text}</button></>);
};

const Display = (props) => <>{props.text} {props.value}<br /></>;

const Title = (props) => <><h1>{props.text}</h1></>;

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <Title text="give feedback" />
      <Button text={TEXT_GOOD} onClick={() => handleClick(TEXT_GOOD, setGood, good)} />
      <Button text={TEXT_NEUTRAL} onClick={() => handleClick(TEXT_NEUTRAL, setNeutral, neutral)} />
      <Button text={TEXT_BAD} onClick={() => handleClick(TEXT_BAD, setBad, bad)} />
      <Title text="statistics" />
      <Display text={TEXT_GOOD} value={good} />
      <Display text={TEXT_NEUTRAL} value={neutral} />
      <Display text={TEXT_BAD} value={bad} />
    </div>
  );

};

export default App;