import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, removeTodo } from '../store/todoSlice';
import './style.css';

export default function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();

  return (
    <li className="TodoItem__Item">
      <div className="TodoItem__block">
        <span className="TodoItem__span">{text}</span>
        <span className="TodoItem__btn" onClick={() => dispatch(removeTodo({ id }))}>
          <svg width="20" height="20" viewBox="0 0 14.344 17" fill="#8C939F">
            <g data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 1417" fill="#a2a2a2">
              <path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 1391" d="M9.113 14.241a.363.363 0 00.272-.346V7.2a.363.363 0 00-.272-.346.394.394 0 00-.523.338v6.711a.394.394 0 00.523.338z" />
              <path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 1392" d="M5.724 14.241a.363.363 0 00.272-.346V7.201a.363.363 0 00-.272-.346.394.394 0 00-.523.338v6.711a.394.394 0 00.523.337z" />
              <path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 1393" d="M14.331 3.394a1.561 1.561 0 00-1.567-1.324H10.91a.259.259 0 01-.263-.254v-.244A1.535 1.535 0 0010.17.456a1.658 1.658 0 00-1.161-.457H5.336a1.658 1.658 0 00-1.161.457 1.535 1.535 0 00-.477 1.116v.244a.259.259 0 01-.264.254h-1.85A1.561 1.561 0 00.017 3.394 1.524 1.524 0 001.176 5.06v9.806a2.152 2.152 0 00.607 1.515 2.075 2.075 0 001.478.615h7.823a2.074 2.074 0 001.478-.615 2.152 2.152 0 00.607-1.515V5.06a1.523 1.523 0 001.162-1.666zM4.525 1.572a.752.752 0 01.235-.553.813.813 0 01.576-.223h3.673a.813.813 0 01.576.223.752.752 0 01.235.553v.244a.259.259 0 01-.264.254H4.784a.259.259 0 01-.263-.254zm7.817 13.3a1.281 1.281 0 01-1.257 1.334H3.259a1.281 1.281 0 01-1.257-1.334V5.563a.475.475 0 01.484-.465h9.373a.475.475 0 01.483.465zm.422-10.57H1.615a.756.756 0 01-.779-.7.73.73 0 01.744-.735h11.15a.756.756 0 01.779.7.73.73 0 01-.745.732z" />
            </g>
          </svg>
        </span>
        <input
          className="TodoItem__check"
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleComplete({ id }))}
        />
      </div>
    </li>
  );
}
