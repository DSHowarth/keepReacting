import seedrandom from 'seedrandom';
import { useState } from 'react';
import { useGameContext } from '../utils/GameContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LetterCypher ({ puzzleId, triageLevel, seed }) {

    const [state, dispatch] = useGameContext();

    const [playerGuess, setPlayerGuess] = useState('');

    const greek = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩσς';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let answer = []
    let clue = ''

    for (let i = 0; i < 2; i++) {
        const num = Math.floor(seedrandom(seed - i) * 26)
        answer.push(num)
        clue+= greek[num]
    }

    const updatePlayerGuess = (event) => {
        const { value } = event.target;
        setPlayerGuess(value);
    }

    const answerCheck = (event) => {
        event.preventDefault();

        try {
            const answerUpper = playerGuess.toUpperCase();
            for (var i = 0; i < answerUpper.length; i++) {
                // if there ever isn't a match, stop checking. 
                // if loop finishes without ever hitting a bad match,
                // remove puzzle from page
                if (!(alphabet.indexOf(answerUpper[i]) === answer[i])) {
                    return;
                }
            }
            dispatch({type: REMOVE_PUZZLE, payload: {puzzleId, triageLevel}})

        } catch {
            console.log('TODO: Add player feedback for incorrect guess format')
        }
    }

    return (
        <>
            <h1>{clue}</h1>
            <Form onSubmit={answerCheck}>
                <Form.Group>
                    <Form.Control size="lg" type="text" onChange={updatePlayerGuess} value={playerGuess}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit  
                </Button>
            </Form>
        </>
    )
}