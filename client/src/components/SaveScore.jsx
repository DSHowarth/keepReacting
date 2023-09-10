import ADD_SCORE from '../utils/mutations';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useMutation } from '@apollo/client';

export default function SaveScore ({ points }) {

    const [teammates, setTeammates] = useState('')  

    const [addScore] = useMutation(ADD_SCORE);

    const updateTeammates = (event) => {
        const { value } = event.target;
        setTeammates(value);
    }

    const submitScore = (event) => {
        event.preventDefault();

        // try {
        //     addScore()
        // } catch {

        // }
    }

    return (
        <>
            <Form onSubmit={submitScore}>
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