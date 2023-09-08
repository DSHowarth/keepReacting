import { createContext, useContext, useReducer } from 'react';
import reducer from './reducers';

// Initialize context
const GameContext = createContext();

// Custom hook
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    

    const gameState = useReducer(reducer, )
    return (
    
    )
}