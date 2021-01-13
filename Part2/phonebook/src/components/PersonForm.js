import React from "react";

export default function PersonForm({
  addName,
  newName,
  handleNameChange,
  newNumber,
  handleNumChange,
}) {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
        <div>
          number: <input value={newNumber} onChange={handleNumChange} />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
