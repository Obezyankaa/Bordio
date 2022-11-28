import './App.css';
import Main from './components/main/Main';
// import { MainContainer } from './components/main/Style';
import NavBar from './components/NavBar/NavBar';
import { GlobalStyles } from './components/Style/GlobalStyle';
import Tools from './components/ToolsBlock/Tools';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Tools />
      <Main />
    </>
  );
}

export default App;
