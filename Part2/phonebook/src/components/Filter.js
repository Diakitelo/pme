import React from "react";

export default function Filter({ searchTerm, handleChange }) {
  return (
    <p>
      Filter shown with
      <input type="text" value={searchTerm} onChange={handleChange} />
    </p>
  );
}
