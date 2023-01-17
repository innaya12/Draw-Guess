import React from 'react';
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import { GameContext } from '../context/GameContext'
import Drawing from './Drawing';
var randomWords = require('random-words');

const wordArray = (randomWords({ exactly: 5, maxLength: 8}));
/// getting to choose from 3 levels of word & choosing
const Word = () => {
  const [play, setPlay] = useState(false);
  const gameContext = useContext(GameContext);
  console.log('gameContext word', gameContext)

  useEffect(()=>{
    console.log(wordArray);
    wordArray.map(word =>{
      if(word.length === 3 || word.length === 4){
        gameContext.easyWord.value = word;
      } else if(word.length === 5 ){
        gameContext.mediumWord.value = word;
      } else if (word.length >= 6 ){
        gameContext.hardWord.value = word;
      }
    });

  }, []);


  function chooseWord(chosenWord){
    console.log('onclick', chosenWord, gameContext[chosenWord].value, gameContext[chosenWord].points)
    gameContext.chosenWord = { value: gameContext.chosenWord.value, level: chosenWord, points: gameContext[chosenWord].points }
    setPlay(true);
    /// choosing a word, saving its data in context so it will pass to the drawing component
  }
  
  return (
    <div>
      <h1>choose a word</h1>
      <p>Please choose what you want to draw!</p>
      <button value="easyWord" onClick={e => chooseWord(e.target.value)}>{gameContext.easyWord.value}</button>
      <button value="mediumWord" onClick={e => chooseWord(e.target.value)}>{gameContext.mediumWord.value}</button>
      <button value="hardWord" onClick={e => chooseWord(e.target.value)}>{gameContext.hardWord.value}</button>
      { play && <Drawing/>}
    </div>
  );
};

export default Word;
