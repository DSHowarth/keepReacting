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
                {timerCard ? <GameTimer timeRemaining={timeRemaining}/> : puzzleObj[puzzleType]}
            </Card.Body>
        </Card>
    )
}