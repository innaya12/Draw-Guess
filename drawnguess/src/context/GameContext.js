import { createContext } from "react";

export const words = {
    easyWord: {value: '', points: 1},
    mediumWord: {value: '', points: 3},
    hardWord: {value: '', points: 5},
    chosenWord: {value: '', level: '', points: 0}
}

export const GameContext = createContext(words);
