import React from "react";

export default function TextField({searchTerm, handleChange, text}) {
  return (
    <p>
      {text}
      <input type="text" value={searchTerm} onChange={handleChange}  />
    </p>
  );
}
