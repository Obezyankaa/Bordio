import React from 'react'
import './style.css';

export default function NewTodoForm({ value, updateText, handleAction }) {
 return (
    <label className="newtodo__label">
      <input
        value={value}
        onChange={(e) => updateText(e.target.value)}
        className="newtodo__input"
      />
      <button className="newtodo__btn" type="submit" onClick={handleAction}>Add todo</button>
    </label>
  );
}

