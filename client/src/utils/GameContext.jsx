import { createContext, useContext, useReducer } from 'react';
import reducer from './reducers';

// Initialize context
const GameContext = createContext();

// Custom hook
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    
    const puzzles = [];
    // TODO: Update timer to 5 min again after testing
    const timeRemaining = 5;
    const gameState = useReducer(reducer,{ puzzles, timeRemaining })

    return (
    <GameContext.Provider value={gameState}>
        {children}
    </GameContext.Provider>
    )
}