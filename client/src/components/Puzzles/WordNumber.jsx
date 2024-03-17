import rng from 'random-seed'
import { useState } from 'react';
import { useGameContext } from '../../utils/GameContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { REMOVE_PUZZLE } from '../../utils/actions'

export default function WordNumber({ puzzleId, seed }) {
  const [state, dispatch] = useGameContext();

  const [playerGuess, setPlayerGuess] = useState('');
  //will be a number

  const seededRng = rng.create(seed);

  const wordBank = ['APPLE', 'ORANGE', 'BANANA', 'GRAPE', 'KIWI', 'MANGO', 'ARRAY', 'FARLEY', 'UNFAIR', 'UIUX'];
  //letters and there values
  const letters = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
  };
  //choose random word for our puzzle
  const choosenWord = wordBank[seededRng.range(wordBank.length)]

  let answer = 0;
  //choose random word from word bank
  let clue = choosenWord;

  //add sum of choosen word values to answer
  for (let i = 0; i < choosenWord.length; i++) {
    answer += letters[choosenWord[i]]
  }

  const updatePlayerGuess = (event) => {
    const { value } = event.target;
    setPlayerGuess(value);
  }

  const answerCheck = (event) => {
    event.preventDefault();

    try {
      //if value does not match answer, does not remove puzzle
      if (!playerGuess === answer) {
        return;
      }

      dispatch({ type: REMOVE_PUZZLE, payload: { puzzleId} })

    } catch {
      console.log('TODO: Add player feedback for incorrect guess format')
    }
  }

  return (
    <>
      <h1>{clue}</h1>
      <Form onSubmit={answerCheck}>
        <Form.Group>
          <Form.Control type="text" onChange={updatePlayerGuess} value={playerGuess} style={{ border: '2px solid black' }} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}