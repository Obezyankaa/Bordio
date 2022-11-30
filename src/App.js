import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Main from './components/main/Main';
import NavBar from './components/NavBar/NavBar';
import { addTodo } from './components/store/todoSlice';
import { GlobalStyles } from './components/Style/GlobalStyle';
import TodoList from './components/TodoTask/TodoList';
import Tools from './components/ToolsBlock/Tools';

function App() {
  const [text, setText] = useState('');
  const [task, setTask] = useState(false);
  const [addTask, setAddtask] = useState(false);
  const submitHandler = () => setAddtask(!addTask);
  const dispatch = useDispatch();
  const submitHandlerAddTask = () => setTask(!task);
  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText('');
      setAddtask(false);
      setTask(false);
    }
  };
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Tools />
      <Main submitHandler={submitHandler} setAddtask={setAddtask} addTask={addTask} task={task} submitHandlerAddTask={submitHandlerAddTask} handleAction={handleAction} text={text} setText={setText} />
    </>
  );
}

export default App;
