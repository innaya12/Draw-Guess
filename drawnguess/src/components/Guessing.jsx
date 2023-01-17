import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext'

const Guessing = () => {
  const gameContext = useContext(GameContext);
  console.log('gameContext guessing', gameContext)

  return (
    <div>
      <h1>Guessing</h1>
      <p>{gameContext.value}</p>
      <p>{gameContext.value}</p>
    </div>
  );
};

export default Guessing;
