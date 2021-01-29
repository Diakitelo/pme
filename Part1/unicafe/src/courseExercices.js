import React, { useState } from "react";
import ReactDOM from "react-dom";

/* const Hello = ({ name, age }) => {
  
  const bornYear = () => new Date().getFullYear() - age


  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
} */

/* const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreaseByOne} text="minus" />
    </div>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Display = ({ counter }) => <div>{counter}</div>; */

///////////////////// A more complex state, debugging React apps
////////////////////////////////////

/* const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

const Button = (props) => { 
  console.log(props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>button press history: {props.allClicks.join(" ")}</div>;
}; */

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text={"thousand"} />
      <Button handleClick={() => setToValue(0)} text={"reser"} />
      <Button handleClick={() => setToValue(value + 1)} text={"increment"} />
    </div>
  );
};

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

ReactDOM.render(<App />, document.getElementById("root"));

/*ReactDOM.render(<App />, document.getElementById("root"));*/
