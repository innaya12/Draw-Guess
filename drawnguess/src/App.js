import './App.css';
import { words, GameContext, PlayersContext, players } from './context/GameContext';
import Wellcome from './components/Wellcome'
// import Word from './components/Word';

function App() {

  return (
    <div className="App">
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
