import './App.css';
import {
  BlockOneTest, BlockTwo, MainBlock, Title, TitleTwo, AnimeTitle,
} from './Style';

function App() {
  return (
    <div className="App">
      <Title>Title one</Title>
      <TitleTwo>Title two</TitleTwo>
      <AnimeTitle>Title fhree</AnimeTitle>
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
