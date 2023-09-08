import { createContext, useContext, useReducer } from 'react';
import reducer from './reducers';

// Initialize context
const GameContext = createContext();

// Custom hook
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    
    const puzzles = [];
    const points = 0;
    const gameState = useReducer(reducer,{ puzzles, points })

    return (
    <GameContext.Provider value={gameState}>
        {children}
    </GameContext.Provider>
    )
}