import './App.css';
import NavBar from './components/NavBar/NavBar';
import { GlobalStyles } from './components/Style/GlobalStyle';
import Tools from './components/ToolsBlock/Tools';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Tools />
    </>
  );
}

export default App;
