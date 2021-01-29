import React from "react";
import Person from "./Person";

export default function Persons({ persons, results, handleDelete }) {
  return (
    <>{results ? <Person results={results} handleDelete={handleDelete} /> : <Person results={persons} handleDelete={handleDelete} />}</>
  );
}
