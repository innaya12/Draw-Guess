import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { words, GameContext, PlayersContext, players } from './context/GameContext';
import Wellcome from './pages/Wellcome';
import Waiting from './pages/Waiting';
import Word from './pages/Word';
import Guessing from './pages/Guessing';

function App() {

  return (
    <div className="App">
      <GameContext.Provider value={words}>
        <PlayersContext.Provider value={players}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Wellcome />} />
              <Route path="waiting/" element={<Waiting />} />
              <Route path="game/" element={<Word />} />
              <Route path="guessing/" element={<Guessing />} />
            </Routes>
          </BrowserRouter>
        </PlayersContext.Provider>
      </GameContext.Provider>
    </div>
  );
}

export default App;
