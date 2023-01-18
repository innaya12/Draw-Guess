import React from 'react';
import Canvas from './drawing/Canvas';

const Drawing = () => {

  function saveImage(){
    const canvas = document.getElementById('canvas');
    const dataURL = canvas.toDataURL();
    console.log(dataURL);
    
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
