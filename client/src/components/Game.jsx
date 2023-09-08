import { useGameContext } from '../utils/GameContext';

// TODO: Create generatePuzzle(), create puzzleGen()

export default function Game () {
    // bring in our game context
    const [state, dispatch] = useGameContext();

    // state variables for time and point increment, and boolean for switching between game and save score screen
    const [timeRemaining, setTimeRemaining] = useState(300);
    const [pointIncrement, setPointIncrement] = useState(0);
    const [gameActive, setGameActive] = useState(true);

    useEffect( () => {
        
        // generate 5 puzzles on game start
        for(let i = 0; i < 5; i++) {
            generatePuzzle();
        }
        // interval updates every second, checking to see if the player has run out of time 
        // while the game goes on, the points total increases every second 
        const timerInterval = setInterval( () => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining--);
                dispatch({ type: INCREASE_SCORE, payload: pointIncrement });
                if (puzzleGen()) {
                    generatePuzzle();
                }
            }
            else {
                clearInterval(timerInterval);
                setGameActive(false);
            }
        }, 1000)
    }, [])

    if (gameActive) {
        return (

            )
    }

    return (
        <SaveScore points={state.points} />
    )
}