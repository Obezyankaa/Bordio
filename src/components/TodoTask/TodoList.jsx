import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../store/todoSlice';
import TodoItem from './TodoItem';
import './style.css';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const [boards, setBords] = useState(null);

  useEffect(() => {
    setBords([
      { id: 1, title: 'NewTask', items: [...todos] },
      { id: 2, title: 'Scheduled', items: [] },
      { id: 3, title: 'InProgress', items: [] },
      { id: 4, title: 'Completed', items: [] },
    ]);
  }, [todos]);

  console.log('boards--->>', boards);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  function dragOverHandler(e) {
    e.preventDefault();
  }
  function dragLeaveHandler(params) {

  }
  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }
  function dragEndHandler(params) {
  }
  function dropHandler(e, board, item) {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    setBords(boards.map((b) => {
      if (b.id === board.id) {
        return board;
      }
      if (b.id === currentBoard.id) {
        return currentBoard;
      }
      return b;
    }));
  }

  function dropCardHandler(e, board) {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBords(boards.map((b) => {
      if (b.id === board.id) {
        return board;
      }
      if (b.id === currentBoard.id) {
        return currentBoard;
      }
      return b;
    }));
  }

  return (
    <div className="TodoLict__container">
      {boards?.map((board) => (
        <div
          className="TodoList__list"
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHandler(e, board)}
          key={board.id}
        >
          <div className="TodoList__title">
            {board.title}
            <div className="TodoList__length">{board.items.length}</div>
          </div>
          <div className="TodoList__block__item">

            {board.items?.map((item) => (
              <div
                style={{ backgroundColor: item.color.split('.').splice(0, 1).join('') }}
                className="TodoItem__Item"
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragStart={(e) => dragStartHandler(e, board, item)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, board, item)}
                draggable
                key={item.id}
              >
                {item.text}
              </div>
            ))}
          </div>

        </div>
      ))}
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
}
