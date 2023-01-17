import React from 'react';
import { useEffect, useContext } from 'react';
import { GameContext } from '../context/GameContext'
import Guessing from './Guessing';
var randomWords = require('random-words');

/// getting to choose from 3 levels of word
/// choosing > than getting the drawing component
const Word = () => {
  const gameContext = useContext(GameContext);
  console.log('gameContext word', gameContext)
  useEffect(()=>{
    let wordArray = (randomWords({ exactly: 5, maxLength: 8}));
    console.log(wordArray);
    wordArray.map(word =>{
      if(word.length === 3 || word.length === 4){
        gameContext.easyWord.value = word
      } else if(word.length === 5 ){
        gameContext.mediumWord.value = word
      } else if (word.length >= 6 ){
        gameContext.hardWord.value = word
      }
    });

  }, [gameContext.easyWord, gameContext.hardWord, gameContext.mediumWord]);


  function chooseWord(chosenWord){

    gameContext.chosenWord = { value: gameContext.chosenWord.value, level: chosenWord }

    /// choosing a word - passing it to the drawing component
  }
  
  return (
    <div>
      <h1>choose a word</h1>
      <p>Please choose what you want to draw!</p>
      <button value="easy" onClick={e => chooseWord(e.target.value)}>{gameContext.easyWord.value}</button>
      <button value="medium" onClick={e => chooseWord(e.target.value)}>{gameContext.mediumWord.value}</button>
      <button value="hard" onClick={e => chooseWord(e.target.value)}>{gameContext.hardWord.value}</button>
      <Guessing/>
    </div>
  );
};

export default Word;
