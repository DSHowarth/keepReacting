import { GameProvider } from "../utils/GameContext";
import Game from '../pages/Game'

export default function GameWrapper () {
    return (
        <GameProvider>
            <Game/>
        </GameProvider>
    )
}