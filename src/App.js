import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Main from './components/main/Main';
import NavBar from './components/NavBar/NavBar';
import { addTodo } from './components/store/todoSlice';
import { GlobalStyles } from './components/Style/GlobalStyle';
import TodoList from './components/TodoList';
import Tools from './components/ToolsBlock/Tools';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText('');
    }
  };
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Tools />
      <Main handleAction={handleAction} text={text} setText={setText} />
    </>
  );
}

export default App;
