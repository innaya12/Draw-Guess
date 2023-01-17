import './App.css';
import { words, GameContext } from './context/GameContext';
import Word from './components/Word';

function App() {

  return (
    <div className="App">
      <GameContext.Provider value={words}>
        <h2>my game</h2>
        <Word/>
      </GameContext.Provider>
    </div>
  );
}

export default App;
