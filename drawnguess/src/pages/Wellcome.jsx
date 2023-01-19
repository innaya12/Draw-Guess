import React from 'react';
import '../style/Style.css'
import { useContext } from 'react';
import { PlayersContext } from '../context/GameContext'
import { useNavigate } from "react-router-dom";

const Wellcome = () => {
  let navigate = useNavigate();
  const playersContext = useContext(PlayersContext);

  function handleChange(event) {
    if(playersContext.existingPlayer){
      playersContext.player2.name = event.target.value
    } else {
      playersContext.player1.name = event.target.value
    }
  };

  ///check if there is another player
  /// if not - the player waits - go to waiting components
  // if yes - start playing - go to word component
  function onClick(){
    if(playersContext.existingPlayer){
      console.log('continue - guess');
      navigate("/game");
      // temporary for test
      //navigate("/guessing"); 

    } else {
      playersContext.existingPlayer = true;
      console.log('wait');
      navigate("/waiting");
      /// after the second player is joing - this player needs to be sent to /game
    }
  };

  return (
    <div className="wellcomeDiv">
      <h1>Wellcome!</h1>
      <h4>Create a game</h4>
      <input className="nameInput" style={{margin:"6px 0"}} placeholder="name" name="name" onChange={handleChange} />
      <button className="startButton" onClick={onClick}> Join/Start a game</button>
    </div>
  );
};

export default Wellcome;
