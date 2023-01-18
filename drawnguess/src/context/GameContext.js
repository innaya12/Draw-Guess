import { createContext } from "react";

export const words = {
    easyWord: {value: '', points: 1},
    mediumWord: {value: '', points: 3},
    hardWord: {value: '', points: 5},
    chosenWord: {value: '', level: '', points: 0}
}

export const players = {
    existingPlayer: false,
    currentPlayer: 'player1',
    player1: {name: '', score: 0},
    player2: {name: '', score: 0},
    image: '',
}

export const GameContext = createContext();
export const PlayersContext = createContext();
