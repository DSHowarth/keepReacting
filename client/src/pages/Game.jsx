import { useGameContext } from '../utils/GameContext';
import uniqid from 'uniqid';
import { useEffect, useState, useRef } from 'react';
import { ADD_PUZZLE, REDUCE_TIMER } from '../utils/actions';
import PuzzleCard from '../components/PuzzleCard';
import GameTimer from '../components/GameTimer';
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

    // checking to see if a new puzzle should be added
    // const puzzleGenBool = () => {
    //     // setting max number of puzzles that can exist at once
    //     if (state.puzzles.length < 6) {
    //         const diceRoll = Math.floor(Math.random() * 100);

    //         //TODO: add logic for adding to the dice roll as the timer ticks down

    //         if (diceRoll > 95) {
    //             return true;
    //         }
    //     }

    //     return false;
    // };

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

        // generate 5 puzzles on game start

        generatePuzzle(2)
        generatePuzzle(1)
        generatePuzzle(1)
        generatePuzzle(0)
        generatePuzzle(0)

        let counter = 0;
        // interval updates every second, checking to see if the player has run out of time 
        // while the game goes on, the points total increases every second 
        interval.current = setInterval(() => {
            if (gameActive) {
                dispatch({ type: REDUCE_TIMER })
                counter++
                if (!(counter % 15)) {
                    generatePuzzle();
                }
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
            
                <GameTimer timeRemaining={state.timeRemaining}/>
            <Row className={'justify-content-center'}>
                {state.puzzles.map((puzzle) => {
                    return <PuzzleCard
                        key={puzzle.id}
                        id={puzzle.id}
                        puzzleType={puzzle.puzzleType}
                        seed={puzzle.seed}
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