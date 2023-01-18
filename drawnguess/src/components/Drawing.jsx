import React from 'react';
import { useContext } from 'react';
import { PlayersContext } from '../context/GameContext'
import Canvas from './drawing/Canvas';
import { useNavigate } from "react-router-dom";

const Drawing = () => {
  let navigate = useNavigate();

  const playersContext = useContext(PlayersContext);
  console.log('playersContext draw', playersContext)

  function saveImage(){
    const canvas = document.getElementById('canvas');
    const dataURL = canvas.toDataURL();
    playersContext.saveImage = dataURL;
    console.log(dataURL);
    /// this navigation is temporary for tests
    navigate("/guessing");

  }

  return (
    <div>
      <h1>Drawing </h1>
      <Canvas width={700} height={500} />
      <button onClick={saveImage}>send</button>
    </div>
  );
};

export default Drawing;
