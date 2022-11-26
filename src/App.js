import './App.css';
import {
  BlockOneTest, BlockTwo, MainBlock, Title, TitleTwo, AnimeTitle,
} from './components/Style/Style';

function App() {
  return (
    <div className="App">
      <Title>My workspace</Title>
      {/* <TitleTwo>Title two</TitleTwo>
      <AnimeTitle>Title fhree</AnimeTitle> */}
      <MainBlock>
        <BlockOneTest><BlockTwo /></BlockOneTest>
        <BlockOneTest><BlockTwo /></BlockOneTest>
        <BlockOneTest><BlockTwo /></BlockOneTest>
        <BlockOneTest><BlockTwo /></BlockOneTest>
      </MainBlock>

    </div>
  );
}

export default App;
