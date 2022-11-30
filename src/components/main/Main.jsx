import React from 'react';
import Header from '../header/Header';
import NewTodoForm from '../TodoTask/NewTodoForm';
import TodoList from '../TodoTask/TodoList';
import { MainContainer } from './Style';

export default function Main({ addTask, setAddtask, submitHandler, task, submitHandlerAddTask, text, setText, handleAction }) {
  return (
    <MainContainer>
      <Header setAddtask={setAddtask} addTask={addTask} submitHandler={submitHandler} submitHandlerAddTask={submitHandlerAddTask} />
      <h1>Main</h1>
      <div className="App">
        {task ? (<NewTodoForm
          value={text}
          updateText={setText}
          handleAction={handleAction} 
        /> 
          ) : (null)}
        <TodoList />
      </div>
    </MainContainer>
  );
}
