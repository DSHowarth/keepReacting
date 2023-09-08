import { createContext, useContext, useReducer } from 'react';
import reducer from './reducers';

// Initialize context
const GameContext = createContext();

// Custom hook
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    
    const puzzles = [];
    
    const gameState = useReducer(reducer,{puzzles})

    return (
    <GameContext.Provider value={gameState}>
        {children}
    </GameContext.Provider>
    )
}