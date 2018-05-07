import React from "react";

function Task() {
  return (
    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox"  />
        <label>Taste JavaScript</label>
        <button className="destroy" />
      </div>
      <input className="edit" />
    </li>
  );
}

export default Task;
