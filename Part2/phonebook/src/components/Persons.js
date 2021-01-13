import React from "react";
import Person from "./Person";

export default function Persons({ persons, results }) {
  return (
    <>
      {results
        ? results.map((item) => (
            <Person name={item.name} number={item.number} key={item.name} />
          ))
        : persons.map((data) => (
            <Person name={data.name} number={data.number} key={data.name} />
          ))}
    </>
  );
}
