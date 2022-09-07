import React from "react";

const Task = ({ id, name, onRemove }) => {
  return (
    <li>
      <p>{name}</p>
      <button onClick={() => onRemove(id)}>Remove</button>
    </li>
  );
};

export default Task;
