import React from 'react';
import '../style/Style.css'
import { useState } from 'react';
import { useContext } from 'react';
import { PlayersContext } from '../context/GameContext'
import { GameContext } from '../context/GameContext'
import { useNavigate } from "react-router-dom";

const Guessing = () => {
  let guessingWord ;
  const [result , setResult] = useState('');
  let navigate = useNavigate();
  const playersContext = useContext(PlayersContext);
  const gameContext = useContext(GameContext);

  function handleChange(e){
    guessingWord = e.target.value;
  };

  function onClick(){
    if(guessingWord === gameContext.chosenWord.value){
      setResult(`Yayy. You won! You have ${gameContext.chosenWord.points} points! Now its your turn to draw!`);
      sessionStorage.setItem(`${playersContext[playersContext.currentPlayer].name}`, gameContext.chosenWord.points);
      setTimeout(() => {
        navigate("/game");
      }, 5000);
    } else {
      setResult("Sorry.. you are wrong. Try again!");

    }
  };

  return (
    <div >
      <h2>Guessing</h2>
      <img className="drawImg" src={playersContext.saveImage} />
      <input className="answer" placeholder="what do you see?" name="name" onChange={handleChange} />
      <div>
        <button onClick={onClick}> Check </button>
      </div>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Guessing;
