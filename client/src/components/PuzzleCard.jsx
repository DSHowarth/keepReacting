import LetterCypher from './Puzzles/LetterCypher';
import Card from 'react-bootstrap/Card';

export default function PuzzleCard ({ key, triageLevel, puzzleType, seed }) {

    const puzzleObj = {
        'letterCypher': <LetterCypher seed={seed}/>
    }

    return(
        // placeholder classnames
        <Card className={triageLevel == 1 ? 'green' : triageLevel == 2 ? 'yellow' : 'red'}>
            <Card.Body>
            {puzzleObj[puzzleType]}
            </Card.Body>
        </Card>
    )
}