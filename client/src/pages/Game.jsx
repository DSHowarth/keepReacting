import { useGameContext } from '../utils/GameContext';
import uniqid from 'uniqid';
import { useEffect, useState, useRef } from 'react';
import { ADD_PUZZLE, REDUCE_TIMER } from '../utils/actions';
import PuzzleCard from '../components/PuzzleCard';
import SaveScore from '../components/SaveScore';
import Row from 'react-bootstrap/Row';

export default function Game() {
    // bring in our game context
    const [state, dispatch] = useGameContext();

    // declare useRef object for our intervalId
    const interval = useRef();

    // boolean for switching between game and save score screen
    const [gameActive, setGameActive] = useState(true);

    // string of puzzle names, elements to be passed along to child components for conversion into actual components
    const puzzleList = ['letterCypher', 'wordNumber', 'buttonOrder'];

    // creates a new, randomly generated puzzle and adds it to the list of active puzzles for React to draw.
    const generatePuzzle = () => {
        const newPuzzle = {};

        // add unique Id so we can find it later to remove
        newPuzzle.id = uniqid();

        // number after * will be determined by the number of puzzles we have. Currently 2
        newPuzzle.puzzleType = puzzleList[Math.floor(Math.random() * puzzleList.length)];

        // create seed for puzzle so it will be the same every time the page renders
        newPuzzle.seed = Math.floor(Math.random() * 1000);

        dispatch({ type: ADD_PUZZLE, payload: newPuzzle });
    };

    useEffect(() => {

        // generate 11 puzzles, make second entry in state array the timer

        generatePuzzle()
        dispatch({ type: ADD_PUZZLE, payload: {gameTimer: true, id: uniqid()} });
        for (let i = 0; i < 10; i++) {
            generatePuzzle()
        }

        // interval updates every second, checking to see if the player has run out of time 
        // while the game goes on, the points total increases every second 
        interval.current = setInterval(() => {
            if (gameActive) {
                dispatch({ type: REDUCE_TIMER })
            }
        }
            , 1000)
    }, []);

    // When the timer hits 0, clear the interval and change screen to 'save score'
    if ((state.timeRemaining == 0) && gameActive) {
        setGameActive(false)
        clearInterval(interval.current)
    }

    if (gameActive) {
        return (
            <>
            <Row className={'justify-content-center'}>
                {state.puzzles.map((puzzle) => {
                    return <PuzzleCard
                        key={puzzle.id}
                        id={puzzle.id}
                        puzzleType={puzzle.puzzleType}
                        seed={puzzle.seed}
                        timeRemaining={state.timeRemaining}
                        timerCard={puzzle.gameTimer}
                        complete={puzzle.complete}
                    />
                })}
            </Row>
            </>
        )
    }

    return (
        <SaveScore points={state.points} />
    );
};