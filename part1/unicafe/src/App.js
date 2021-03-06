import React, { useState } from "react";

const TEXT_GOOD = "good";
const TEXT_NEUTRAL = "neutral";
const TEXT_BAD = "bad";
const SPACING = 1;
const TEXT_ALL = "all";
const TEXT_AVERAGE = "average";
const TEXT_POSITIVE = "positive";

const Button = (props) => {
  return (<><button style={{ marginRight: SPACING + "em" }} onClick={props.onClick}>{props.text}</button></>);
};

const StatisticsLine = (props) => (<>
  <td>{props.text}</td>
  <td>{props.value}</td>
</>);

const Statistics = ({ good, bad, neutral }) => {

  let all = 0, average = 0, positive = 0;

  all = (good + bad + neutral)
  average = all === 0 ? 0 : (good - bad) / all;
  positive = all === 0 ? 0 : 100 * good / all;

  let result;

  if (all === 0)
    result = (<><p>No feedback given</p></>);
  else
    result = (<>
      <table>
        <tbody>
          <tr>
            <StatisticsLine text={TEXT_GOOD} value={good} />
          </tr>
          <tr>
            <StatisticsLine text={TEXT_NEUTRAL} value={neutral} />
          </tr>
          <tr>
            <StatisticsLine text={TEXT_BAD} value={bad} />
          </tr>
          <tr>
            <StatisticsLine text={TEXT_ALL} value={all} />
          </tr>
          <tr>
            <StatisticsLine text={TEXT_AVERAGE} value={average} />
          </tr>
          <tr>
            <StatisticsLine text={TEXT_POSITIVE} value={positive + " %"} />
          </tr>
        </tbody>
      </table>
    </>);

  return result;
};

const Title = (props) => <><h1>{props.text}</h1></>;

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (buttonPressed, setterFunction, stateValue) => {

    setterFunction(stateValue + 1);
    console.log("button pressed [", buttonPressed, "]");

  };

  return (
    <div>
      <Title text="give feedback" />
      <Button text={TEXT_GOOD} onClick={() => handleClick(TEXT_GOOD, setGood, good)} />
      <Button text={TEXT_NEUTRAL} onClick={() => handleClick(TEXT_NEUTRAL, setNeutral, neutral)} />
      <Button text={TEXT_BAD} onClick={() => handleClick(TEXT_BAD, setBad, bad)} />
      <Title text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );

};

export default App;