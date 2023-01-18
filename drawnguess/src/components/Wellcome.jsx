import React from 'react';
import { useContext } from 'react';
import { PlayersContext } from '../context/GameContext'
import { useNavigate } from "react-router-dom";

const Wellcome = () => {
  let navigate = useNavigate();
  const playersContext = useContext(PlayersContext);

  function handleChange(event) {
    console.log(event.target.value);
    if(playersContext.existingPlayer){
      playersContext.player2.name = event.target.value
    } else {
      playersContext.player1.name = event.target.value
    }
  }

  ///check if there is another player
  /// if not - the player waits - go to waiting components
  // if yes - start playing - go to word component
  function onClick(){
    if(playersContext.existingPlayer){
      console.log('continue - guess');
      navigate("/game");

    } else {
      playersContext.existingPlayer = true;
      console.log('wait');
      navigate("/waiting");
    }
  }

  console.log('asa PlayersContext', playersContext.existingPlayer)
  console.log('name PlayersContext', playersContext.player1.name)
  return (
    <div>
      <h1>Wellcome!</h1>
       <p>Create a game</p>
       <input name="name" onChange={handleChange} />
       <input placeholder="name" name="name" onChange={handleChange} />
       <button onClick={onClick}> Join/Start a game</button>
    </div>
  );
};

export default Wellcome;
