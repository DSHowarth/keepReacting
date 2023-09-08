import { useGameContext } from '../utils/GameContext';
import uniqid from 'uniqid';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react'

// TODO: Create puzzleGenBool()

export default function Game () {
    // bring in our game context
    const [state, dispatch] = useGameContext();

    // state variables for time and point increment, and boolean for switching between game and save score screen
    const [timeRemaining, setTimeRemaining] = useState(300);
    const [pointIncrement, setPointIncrement] = useState(0);
    const [gameActive, setGameActive] = useState(true);

    // point increments for triage levels
    const triage = [10, 25, 50];
    const puzzleList = ['letterCypher'];

    // checking to see if a new puzzle should be added
    const puzzleGenBool = (time) => {
        // setting max number of puzzles that can exist at once
        if (state.puzzles.length < 10) {
            const diceRoll = Math.floor(Math.random() * 100);
            
            //TODO: add logic for adding to the dice roll as the timer ticks down

            if(diceRoll > 80) {
                return true;
            }
        }

        return false;
    }

    // creates a new, randomly generated puzzle and adds it to the list of active puzzles for React to draw.
    const generatePuzzle = () => {

        const newPuzzle = {};

        // add unique Id so we can find it later to remove
        newPuzzle.id = uniqid();

        // 3 triage levels
        newPuzzle.triageLevel = Math.floor(Math.random() * 3 + 1);

        // number after * will be determined by the number of puzzles we have. Currently 1
        newPuzzle.puzzleType = puzzleList[Math.floor(Math.random() * 1)];

        // create seed for puzzle so it will be the same every time the page renders
        newPuzzle.seed = Math.floor(Math.random() * 1000);

        dispatch({type: ADD_PUZZLE, payload: newPuzzle})
        setPointIncrement(pointIncrement + triage[newPuzzle.triageLevel])
    }

    useEffect( () => {
        
        // generate 5 puzzles on game start
        for(let i = 0; i < 5; i++) {
            generatePuzzle();
        }
        // interval updates every second, checking to see if the player has run out of time 
        // while the game goes on, the points total increases every second 
        const timerInterval = setInterval( () => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1);
                dispatch({ type: INCREASE_SCORE, payload: pointIncrement });
                if (puzzleGenBool(timeRemaining)) {
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
            <>
            <h1>Time Remaining: {dayjs(timeRemaining).format('m:ss')}</h1>
            <h2>Points: {state.points}</h2>
            <ul>
                {state.puzzles.map( (puzzle) => {
                    return <PuzzleCard 
                                key={puzzle.id} 
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
    )
}