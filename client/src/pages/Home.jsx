import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'

export default function Home () {

    return (
        <>
            <h1> Welcome to the Game</h1>
            <LinkContainer to='/game'><Button variant="primary">Play</Button></LinkContainer>
            <LinkContainer to='/manual'><Button variant="primary">Manual</Button></LinkContainer>
        </>
    )
}