import { ADD_SCORE } from '../utils/mutations';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { useMutation } from '@apollo/client';

export default function SaveScore ({ points }) {

    const [teammates, setTeammates] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const [addScore] = useMutation(ADD_SCORE);

    const updateTeammates = (event) => {
        const { value } = event.target;
        setTeammates(value);
    }

    const submitScore = async (event) => {
        event.preventDefault();

        try {
            const newScore = {
                score: points,
                teammates: teammates,
            }
            console.log(newScore);
            const addScoreResults = await addScore({ variables: {input: newScore}})
            console.log(addScoreResults)
        } catch (err) {
            console.log(err)
            setShowAlert(true);
        }
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
                { showAlert &&
                    <Alert variant='danger'>Something went wrong, score was not added.</Alert>
                }   
            </Form>
        </>
    )
}