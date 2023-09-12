import rng from 'random-seed'
import { useState } from 'react';
import { useGameContext } from '../../utils/GameContext';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { REMOVE_PUZZLE } from '../../utils/actions'

export default function ButtonOrder ({ puzzleId, triageLevel, seed }) {

    const [state, dispatch] = useGameContext();

    const [playerGuess, setPlayerGuess] = useState([]);

    const seededRng = rng.create(seed);

    // list of colors. The order of the array is their order of priority (descending)
    const colors = ['white', 'black', 'green', 'red', 'blue', 'violet', 'yellow', 'orange'];

    let genOrder = [];
    let genObj = {};

    // create randomly generated order. It's in a while loop and not a for loop to prevent 
    // duplicate entries
    while (genOrder.length < 4) {
        // use seeded rng for consistency over renders
        let newIndex = seededRng.range(colors.length)
        if (!genObj[newIndex]) {
            genOrder.push(newIndex);
            genObj[newIndex] = true;
        }
    }

    // sort the randomly generated order to create our answer
    let answer = [...genOrder].sort((a, b) => a - b).toString();

    // 
    const updatePlayerGuess = (event) => {
        const { id } = event.target;
        let temp = playerGuess;
        // guess length is equal to the max number of buttons. Players just need to get them in order
        if(temp.length == 4){
            temp.shift();
        }

        //
        temp.push(id);
        setPlayerGuess(temp);

        // after each update, check whether they have the correct answer. Convert to string to allow
        // use of logical operator
        if (playerGuess.toString() === answer) {
            dispatch({type: REMOVE_PUZZLE, payload: {puzzleId, triageLevel}})
        }
        
    }

    return (
        <>
        {/* Generate list of buttons */}
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