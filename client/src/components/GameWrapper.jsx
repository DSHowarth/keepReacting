import { GameProvider } from "../utils/GameContext";
import Game from '../pages/Game';

// Creates a single component to mount GameContext provider and Game so it resets whenever 
// the user leaves the game page. 
export default function GameWrapper () {
    return (
        <GameProvider>
            <Game/>
        </GameProvider>
    )
}