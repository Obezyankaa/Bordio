/* eslint-disable max-len */
import React from 'react';
import { NewTodoButton, NewTodoInput, NewTodoform } from './Style';
import './style.css';

export default function NewTodoForm({ value, updateText, handleAction }) {
  return (
    <label className="newtodo__label">
      <NewTodoform>
        <NewTodoInput
          value={value}
          onChange={(e) => updateText(e.target.value)}
        />
        <NewTodoButton onClick={handleAction}>Add Task</NewTodoButton>

      </NewTodoform>

      {/* <input
        value={value}
        onChange={(e) => updateText(e.target.value)}
        className="newtodo__input"
     /> */}
      {/* <NewTodoButton onClick={handleAction}>Add Task</NewTodoButton> */}
      {/* <button className="newtodo__btn" type="submit" onClick={handleAction}>Add todo</button> */}
    </label>
  );
}
