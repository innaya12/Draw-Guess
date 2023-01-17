import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { words, GameContext, PlayersContext, players } from './context/GameContext';
import Wellcome from './components/Wellcome';
import Waiting from './components/Waiting';
import Word from './components/Word';
import Guessing from './components/Guessing';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wellcome />} />
        <Route path="waiting/" element={<Waiting />} />
        <Route path="game/" element={<Word />} />
        <Route path="guessing/" element={<Guessing />} />
      </Routes>
    </BrowserRouter>
      <GameContext.Provider value={words}>
        <PlayersContext.Provider value={players}>
          <Wellcome/>
          {/* <Word/> */}
        </PlayersContext.Provider>
      </GameContext.Provider>
    </div>
  );
}

export default App;
