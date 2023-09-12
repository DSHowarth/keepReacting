import { ADD_SCORE } from '../utils/mutations';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";

export default function SaveScore ({ points }) {

    const [teammates, setTeammates] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigate();

    const [addScore, {loading}] = useMutation(ADD_SCORE);

    const updateTeammates = (event) => {
        const { value } = event.target;
        setTeammates(value);
    }

    const submitScore = async (event) => {
        event.preventDefault();

        try {
            // Add score, if there's an issue, enable alert
            const newScore = {
                score: points,
                teammates: teammates,
            }
            await addScore({ variables: {input: newScore}});
            // if successful, redirect user to home page and pass along a boolean to display the 'score saved' confirmation when
            // they get there. 
            navigate('/', {state: {scoreSubmit: true}});
        } catch (err) {
            console.log(err)
            setShowAlert(true);
        }
    }

    return (
        <>
            <Form onSubmit={submitScore} style={{width: '50%'}}>
                <p>Congratulations, you scored {points} points! 
                Would you like to save your score?</p>
                <Form.Group>
                    <Form.Label>Teammates</Form.Label>
                    <Form.Control size="lg" type='text' onChange={updateTeammates} value={teammates}/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={loading && 'disabled'}>
                    Submit
                </Button >
                { showAlert &&
                    <Alert variant='danger'>Something went wrong, score was not added.</Alert>
                }   
            </Form>
        </>
    )
}