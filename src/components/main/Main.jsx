import React from 'react';
import Header from '../header/Header';
import NewTodoForm from '../NewTodoForm';
import TodoList from '../TodoList';
import { MainContainer } from './Style';

export default function Main({ text, setText, handleAction }) {
  return (
    <MainContainer>
      <Header />
      <h1>привет</h1>
      <div className="App">
        <NewTodoForm
          value={text}
          updateText={setText}
          handleAction={handleAction}
        />
        <TodoList />
      </div>
    </MainContainer>
  );
}
