import LetterCypher from './Puzzles/LetterCypher';
import ButtonOrder from './Puzzles/ButtonOrder';
import Card from 'react-bootstrap/Card';

export default function PuzzleCard ({ id, triageLevel, puzzleType, seed }) {

    const puzzleObj = {
        'letterCypher': <LetterCypher seed={seed} triageLevel={triageLevel} puzzleId={id}/>,
        'buttonOrder': <ButtonOrder seed={seed} triageLevel={triageLevel} puzzleId={id}/>
    }

    return(
        // placeholder classnames
        <Card className={'col-4 ' + (triageLevel == 0 ? 'triage-0' : triageLevel == 1 ? 'triage-1' : 'triage-2')}>
            <Card.Body>
            {puzzleObj[puzzleType]}
            </Card.Body>
        </Card>
    )
}