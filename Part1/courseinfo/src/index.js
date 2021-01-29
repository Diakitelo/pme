import React from "react";
import ReactDOM from "react-dom";

/* Header component
 */

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

/* Content component
 */
const Content = ({ parts }) => (
  <>
    {parts.map(({ name, exercises }, i) => (
      <p key={i}>
        <Part name={name} exercises={exercises} />
      </p>
    ))}
  </>
);

const Part = ({ name, exercises }) => (
  <>
    {name} {exercises}
  </>
);

/* Total component
 */
const Total = ({ parts }) => {
  const total = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);

  return <p>Number of exercises {total}</p>;
};

/* App component
 */
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
