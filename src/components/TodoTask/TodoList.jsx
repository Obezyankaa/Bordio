import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './style.css';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const obg = [
    { id: 1, title: 'NewTask', items: [...todos] },
    { id: 2, title: 'Scheduled', items: [] },
    { id: 3, title: 'InProgress', items: []},
  ]
console.log(obg);
  const [boards, setBords] = useState(obg);

  return (
    <div className='test'>
      {boards?.map((board) => 
        <div className='TodoList__list' key={board.id}>
          <h1>{board.title}</h1>
          {board.items?.map((item) => 
            <div className='TodoItem__Item'
              onDragOver={(e) => dragOverHandler(e, board, item)}
              
              draggable={true}

              key={item.id}>{item.text}</div>
            )}
        </div>
        )}
    </div>
    // <ul className='TodoList__list'>
    //   {todos?.map((todo) => (
    //     <TodoItem
    //       key={todo.id}
    //       {...todo}
    //     />
    //   ))}
    // </ul>
  );
};
