import LetterCypher from './Puzzles/LetterCypher';
import WordNumber from './Puzzles/WordNumber';
import ButtonOrder from './Puzzles/ButtonOrder';
import Card from 'react-bootstrap/Card';
import GameTimer from './GameTimer';

export default function PuzzleCard({ id, puzzleType, seed, timeRemaining, timerCard }) {

    const puzzleObj = {
        'letterCypher': <LetterCypher seed={seed} puzzleId={id} />,
        'wordNumber': <WordNumber seed={seed} puzzleId={id} />,
        'buttonOrder': <ButtonOrder seed={seed} puzzleId={id}/>
    }

    return (
        // placeholder classnames
        <Card className={'col-4 '}>
            <Card.Body>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-circle-fill" viewBox="0 0 16 16" id={id}>
                <circle cx="8" cy="8" r="8"/>
            </svg>
                {timerCard ? <GameTimer timeRemaining={timeRemaining}/> :
                puzzleObj[puzzleType]}
            </Card.Body>
        </Card>
    )
}