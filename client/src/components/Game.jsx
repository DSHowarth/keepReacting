import { useGameContext } from '../utils/GameContext';
import uniqid from 'uniqid';
import { useEffect, useState, useRef } from 'react';
import { ADD_PUZZLE, INCREASE_SCORE, REDUCE_TIMER } from '../utils/actions';
import PuzzleCard from './PuzzleCard';
import GameTimer from './GameTimer'

export default function Game () {
    // bring in our game context
    const [state, dispatch] = useGameContext();

    // declare useRef object for our intervalId
    const interval = useRef();

    // state variables for time and point increment, and boolean for switching between game and save score screen
    const [gameActive, setGameActive] = useState(true);

    // string of puzzle names, elements to be passed along to child components for conversion into actual components
    const puzzleList = ['letterCypher'];

    // checking to see if a new puzzle should be added
    const puzzleGenBool = (time) => {
        // setting max number of puzzles that can exist at once
        if (state.puzzles.length < 10) {
            const diceRoll = Math.floor(Math.random() * 100);
            
            //TODO: add logic for adding to the dice roll as the timer ticks down

            if(diceRoll > 95) {
                return true;
            }
        }

        return false;
    };

    // creates a new, randomly generated puzzle and adds it to the list of active puzzles for React to draw.
    const generatePuzzle = () => {

        const newPuzzle = {};

        // add unique Id so we can find it later to remove
        newPuzzle.id = uniqid();

        // 3 triage levels
        newPuzzle.triageLevel = Math.floor(Math.random() * 3);

        // number after * will be determined by the number of puzzles we have. Currently 1
        newPuzzle.puzzleType = puzzleList[Math.floor(Math.random() * 1)];

        // create seed for puzzle so it will be the same every time the page renders
        newPuzzle.seed = Math.floor(Math.random() * 1000);

        dispatch({type: ADD_PUZZLE, payload: newPuzzle});
    };

    useEffect( () => {
        
        // generate 5 puzzles on game start
        for(let i = 0; i < 5; i++) {
            generatePuzzle();
        }
        // interval updates every second, checking to see if the player has run out of time 
        // while the game goes on, the points total increases every second 

        interval.current = setInterval( () => {
            if (gameActive) {
                dispatch({type: REDUCE_TIMER})
                dispatch({ type: INCREASE_SCORE});
                if (puzzleGenBool()) {
                    generatePuzzle();
                }
            }
        }
        , 1000)
    }, []);

    // When the timer hits 0, clear the interval and change screen to 'save score'
    if (state.timeRemaining == 0) {
        setGameActive(false)
        clearInterval(interval.current)
    }

    if (gameActive) {
        return (
            <>
                <GameTimer timeRemaining={state.timeRemaining} points={state.points}/>
                <ul>
                    {state.puzzles.map( (puzzle) => {
                        return <PuzzleCard 
                                    key={puzzle.id}
                                    id={puzzle.id}
                                    triageLevel={puzzle.triageLevel}
                                    puzzleType={puzzle.puzzleType} 
                                    seed={puzzle.seed}
                                    />
                    })}
                </ul>
            </>
            )
    }

    return (
        <SaveScore points={state.points} />
    );
};