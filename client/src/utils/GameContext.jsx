import { createContext, useContext, useReducer } from 'react';
import reducer from './reducers';

// Initialize context
const GameContext = createContext();

// Custom hook
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    
    const puzzles = [];
    const points = 0;
    const pointIncrement = 0;
    // TODO: Update timer to 5 min again after testing
    const timeRemaining = 15;
    const gameState = useReducer(reducer,{ puzzles, points, pointIncrement, timeRemaining })

    return (
    <GameContext.Provider value={gameState}>
        {children}
    </GameContext.Provider>
    )
}