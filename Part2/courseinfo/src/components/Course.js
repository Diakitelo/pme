import React from "react";

const Course = ({ course }) => {
  console.log('props', course);
  const total = course.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

const Header = ({ name }) => <h2>{name}</h2>;

const Content = ({ parts }) =>
  parts.map((part) => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ total }) => (
  <p>
    <b>total of {total} exercises</b>
  </p>
);

export default Course;
