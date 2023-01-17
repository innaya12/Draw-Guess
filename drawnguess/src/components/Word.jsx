import React from 'react';
import { useState, useEffect } from 'react';
import Drawing from './Drawing'
var randomWords = require('random-words');

/// getting to choose from 3 levels of word
/// choosing > than getting the drawing component
const Word = () => {
  const [easyWord, setEasyWord] = useState('');
  const [mediumWord, setMediumWord] = useState('');
  const [hardWord, setHardWord] = useState('');

  useEffect(()=>{
    let wordArray = (randomWords({ exactly: 5, maxLength: 8}));
    console.log(wordArray);
    wordArray.map(word =>{
      if(word.length === 3 || word.length === 4){
        setEasyWord(word)
      } else if(word.length === 5 ){
        setMediumWord(word)
      } else if (word.length >= 6 ){
        setHardWord(word)
      }
    });

}, []);


  function chooseWord(word){
    /// choosing a word - passing it to the drawing component
  }


  
  return (
    <div>
      <h1>choose a word</h1>
      <p>Please choose what you want to draw!</p>
      <button value="easy" name={easyWord} onClick={e => chooseWord(e.target.name)}>{easyWord}</button>
      <button value="medium" name={mediumWord} onClick={e => chooseWord(e.target.name)}>{mediumWord}</button>
      <button value="hard" name={hardWord} onClick={e => chooseWord(e.target.name)}>{hardWord}</button>
    </div>
  );
};

export default Word;
