import { useGameContext } from '../utils/GameContext';

export default function Game () {
    // bring in our game context
    const [state, dispatch] = useGameContext();

    // state variables for time and point increment, and boolean for switching between game and save score screen
    const [timeRemaining, setTimeRemaining] = useState(300);
    const [pointIncrement, setPointIncrement] = useState(0);
    const [gameActive, setGameActive] = useState(true);

    useEffect( () => {
        const timerInterval = setInterval( () => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining--);
                dispatch({ type: INCREASE_SCORE, payload: pointIncrement });
            }
            else {
                clearInterval(timerInterval);
                setGameActive(false);
            }
        }

        )
    }, [])

    if (gameActive) {
        return (

            )
    }

    return (
        <SaveScore points={state.points} />
    )
}