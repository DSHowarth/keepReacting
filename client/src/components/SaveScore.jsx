import ADD_SCORE from '../utils/mutations';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function SaveScore ({ points }) {

    const [teammates, setTeammates] = useState('')

    const updateTeammates = (event) => {
        const { value } = event.target;
        setTeammates(value);
    }

    return (
        <>
            <Form>
                <p>Congratulations, you scored {points} points! 
                Would you like to save your score?</p>
                <Form.Group>
                    <Form.Label>Teammates</Form.Label>
                    <Form.Control size="lg" type='text' onChange={updateTeammates} value={teammates}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}