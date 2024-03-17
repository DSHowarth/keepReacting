import rng from 'random-seed'
import { useState } from 'react';
import { useGameContext } from '../../utils/GameContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { COMPLETE_PUZZLE } from '../../utils/actions'

export default function LetterCypher ({ puzzleId, seed }) {

    const [state, dispatch] = useGameContext();

    const [playerGuess, setPlayerGuess] = useState('');

    const seededRng = rng.create(seed);

    const greek = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩσς';
    const alphabet = 'ZKFYPEXTRNGQLUAMSIJBCODWVH';

    let answer = [];
    let clue = '';

    for (let i = 0; i < 4; i++) {
        const num = seededRng.range(26);
        answer.push(num);
        clue+= greek[num];
    }

    const updatePlayerGuess = (event) => {
        const { value } = event.target;
        setPlayerGuess(value);
    }

    const answerCheck = (event) => {
        event.preventDefault();

        if (!(playerGuess.length === answer.length)) {
            return;
        }

        try {
            const guessUpper = playerGuess.toUpperCase();
            for (var i = 0; i < guessUpper.length; i++) {
                // if there ever isn't a match, stop checking. 
                // if loop finishes without ever hitting a bad match,
                // remove puzzle from page
                // finds the index of their input in the regular alphabet, and if that matches the answer key, do nothing
                if (!(alphabet.indexOf(guessUpper[i]) === answer[i])) {
                    return;
                }
            }
            dispatch({ type: COMPLETE_PUZZLE, payload: { puzzleId} })
            
        } catch {
            console.log('TODO: Add player feedback for incorrect guess format')
        }
    }

    return (
        <>
            <h1>{clue}</h1>
            <Form onSubmit={answerCheck}>
                <Form.Group>
                    <Form.Control type="text" 
                                onChange={updatePlayerGuess} 
                                value={playerGuess}
                                style={{border: '2px solid black'}}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit  
                </Button>
            </Form>
        </>
    )
}