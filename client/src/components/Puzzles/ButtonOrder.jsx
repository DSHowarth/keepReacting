import rng from 'random-seed'
import { useState } from 'react';
import { useGameContext } from '../../utils/GameContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { REMOVE_PUZZLE } from '../../utils/actions'

export default function ButtonOrder ({ puzzleId, triageLevel, seed }) {

    const [state, dispatch] = useGameContext();

    const [playerGuess, setPlayerGuess] = useState([]);

    const seededRng = rng.create(seed);

    const colors = ['white', 'black', 'green', 'red', 'blue', 'violet', 'yellow', 'orange'];

    let genOrder = [];

    let genObj = {};

    while (genOrder.length < 4) {
        let newIndex = seededRng.range(colors.length)
        if (!genObj[newIndex]) {
            genOrder.push(newIndex);
            genObj[newIndex] = true;
        }
    }

    let answer = [...genOrder].sort((a, b) => a - b).toString();

    const updatePlayerGuess = (event) => {
        const { id } = event.target;
        let temp = playerGuess;
        if(temp.length == 4){
            temp.shift();
        }

        temp.push(id);
        setPlayerGuess(temp);


        if (playerGuess.toString() === answer) {
            dispatch({type: REMOVE_PUZZLE, payload: {puzzleId, triageLevel}})
        }
        
    }

    console.log(playerGuess)
    console.log(answer)




    // const answerCheck = (event) => {
    //     event.preventDefault();

    //     if (!(playerGuess.length === answer.length)) {
    //         return;
    //     }

    //     try {
    //         const guessUpper = playerGuess.toUpperCase();
    //         for (var i = 0; i < guessUpper.length; i++) {
    //             // if there ever isn't a match, stop checking. 
    //             // if loop finishes without ever hitting a bad match,
    //             // remove puzzle from page
    //             // finds the index of their input in the regular alphabet, and if that matches the answer key, do nothing
    //             if (!(alphabet.indexOf(guessUpper[i]) === answer[i])) {
    //                 return;
    //             }
    //         }
    //         dispatch({type: REMOVE_PUZZLE, payload: {puzzleId, triageLevel}})
            
    //     } catch {
    //         console.log('TODO: Add player feedback for incorrect guess format')
    //     }
    // }



    return (
        <>
            {genOrder.map((index) => {
                return <Button key={index}
                            style={{backgroundColor: `${colors[index]}`}}
                            className={'bigButton'}
                            id={index}
                            onClick={updatePlayerGuess}/>
            })}
        </>
    )
}