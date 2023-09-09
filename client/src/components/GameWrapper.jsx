import { GameProvider } from '../utils/GameContext'
import Game from './Game'

export default function GameWrapper () {
    return (
        <GameProvider>
            <Game />
        </GameProvider>
    )
}