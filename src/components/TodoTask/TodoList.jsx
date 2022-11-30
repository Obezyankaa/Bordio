import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './style.css';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const obg = [
    { id: 1, title: 'NewTask', items: todos },
    { id: 2, title: 'Scheduled', items: null },
    { id: 3, title: 'InProgress', items: null},
  ]

  console.log("obg---->>", obg);
  return (
    <ul className='TodoList__list'>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};
