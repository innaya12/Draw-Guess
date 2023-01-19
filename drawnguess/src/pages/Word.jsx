import React from 'react';
import '../style/Style.css'
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import { GameContext } from '../context/GameContext'
import Drawing from './Drawing';
var randomWords = require('random-words');

/// getting 6 words > searching for the 3 words length needed >  choosing
const Word = () => {
  const [play, setPlay] = useState(false);
  const gameContext = useContext(GameContext);
  
  useEffect(()=>{
    const wordArray = (randomWords({ exactly: 6, maxLength: 8}));
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
  });


  function chooseWord(e, chosenWord){
    console.log('you choose',chosenWord)
    gameContext.chosenWord = { value: chosenWord, level: e.target.value, points: gameContext[e.target.value].points }
    setPlay(true);
    /// choosing a word, saving its data in context so it will pass to the drawing component
  }
  
  return (
    <div>
      <h2>Choose a word</h2>
      <p>Choose the word that you want to draw!</p>
      <div className="level">
        <p>Easy - 1 point</p>
        <button value="easyWord" onClick={e => chooseWord(e, gameContext.easyWord.value)}>{gameContext.easyWord.value}</button>
      </div>
      <div className="level">
        <p>Medium - 3 point</p>
        <button value="mediumWord" onClick={e => chooseWord(e, gameContext.mediumWord.value)}>{gameContext.mediumWord.value}</button>
      </div>
      <div className="level">
        <p>Hard - 5 point</p>
        <button value="hardWord" onClick={e => chooseWord(e, gameContext.hardWord.value)}>{gameContext.hardWord.value}</button>
      </div>
      { play && <Drawing/>}
    </div>
  );
};

export default Word;
