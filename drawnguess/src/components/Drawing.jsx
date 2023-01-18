import React from 'react';
import Canvas from './drawing/Canvas';

const Drawing = () => {

  function onClick(){
    
  }
    /// Drawing

  return (
    <div>
      <h1>Drawing </h1>
      <Canvas width={700} height={500} />

      <button onClick={onClick}>Send</button>
    </div>
  );
};

export default Drawing;
