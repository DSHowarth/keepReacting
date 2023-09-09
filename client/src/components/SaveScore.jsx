import ADD_SCORE from '../utils/mutations'


export default function SaveScore ({ points }) {

    


    return (
        <>
            <Form>
                <p>Congratulations, you scored {points} points! 
                Would you like to save your score?</p>
                <Form.Group>
                    <Form.Label>Teammates</Form.Label>
                    <Form.Control type='text'/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}