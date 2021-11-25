import React, { useState } from "react";

const Button = ({ text, handler }) => (<><button onClick={handler}>{text}</button></>);

const App = () => {

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients"
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVoted] = useState(new Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {

    console.log("pressed button");
    let randomInd = getRandomArbitrary(0, anecdotes.length);

    console.log("generated random number [" + randomInd + "]");
    setSelected(randomInd);

  };

  const handleVote = () => {

    let updatedVotes = [...votes];
    console.log("votes so far [", updatedVotes, "]");


    updatedVotes[selected] += 1;
    setVoted(updatedVotes);
    console.log("votes after computing vote  for anecdote [", selected, "]: [", updatedVotes, "]");

  };

  const getRandomArbitrary = (min, max) => Math.trunc(Math.random() * (max - min) + min);

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p><Button text="vote" handler={() => handleVote()} /> <Button text="next anecdote" handler={() => handleNextAnecdote()} /></p>
    </div>
  );
};

export default App;