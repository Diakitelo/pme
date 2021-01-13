import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(
    Array.apply(null, new Array(anecdotes.length + 1)).map(
      Number.prototype.valueOf,
      0
    )
  );
  const mostVotes = points.indexOf(Math.max(...points));

  const setToVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  const nextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  return (
    <div>
      <Anecdote title="Anecdote of the day" index={selected} points={points} />
      <br />
      <Button handleClick={setToVote} text={"vote"} />
      <Button handleClick={nextAnecdote} text={"next anecdocte"} />
      <Anecdote
        title="Anecdote with most votes"
        index={mostVotes}
        points={points}
      />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

/* Anecdote component */

const Anecdote = ({title, index, points}) => {
  return (
    <div>
      <h1>{title}</h1>
      {anecdotes[index]}
      <br />
      has {points[index]} votes
    </div>
  );
};

/* Anecdote component */

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
