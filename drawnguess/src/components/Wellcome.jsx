import React from 'react';
import { useContext } from 'react';
import { PlayersContext } from '../context/GameContext'


const Wellcome = () => {

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
    } else {
      playersContext.existingPlayer = true;
      console.log('wait');
    }
  }

  console.log('asa PlayersContext', playersContext.existingPlayer)
  console.log('name PlayersContext', playersContext.player1.name)


    /// wait to the other player join and that get the word component
  return (
    <div>
      <h1>Please wait to the second player to join</h1>
    </div>
  );
};

export default Wellcome;
