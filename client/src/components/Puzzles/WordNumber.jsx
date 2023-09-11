import rng from 'random-seed'
import { useState } from 'react';
import { useGameContext } from '../../utils/GameContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { REMOVE_PUZZLE } from '../../utils/actions'

export default function WordNumber({ puzzleId, triageLevel, seed }) {
  const [state, dispatch] = useGameContext();

  const [playerGuess, setPlayerGuess] = useState('');
  //will be a number

  const seededRng = rng.create(seed);

  const wordBank = ['apple', 'orange', 'banana', 'grape', 'kiwi', 'mangosteen']

  let answer;
  let clue;

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

      dispatch({ type: REMOVE_PUZZLE, payload: { puzzleId, triageLevel } })

    } catch {
      console.log('TODO: Add player feedback for incorrect guess format')
    }
  }
}