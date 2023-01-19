import React from 'react';
import '../style/Style.css'
import { useContext } from 'react';
import { PlayersContext } from '../context/GameContext'
import Canvas from '../components/drawing/Canvas';
import { useNavigate } from "react-router-dom";

const Drawing = () => {
  let navigate = useNavigate();
  const playersContext = useContext(PlayersContext);

  function saveImage(){
    const canvas = document.getElementById('canvas');
    const dataURL = canvas.toDataURL();
    playersContext.saveImage = dataURL;
    console.log(dataURL);
    /// this navigation is temporary for tests
    navigate("/guessing");
  };

  return (
    <div>
      <h2>Drawing </h2>
      <Canvas/>
      <button onClick={saveImage}>send</button>
    </div>
  );
};

export default Drawing;
