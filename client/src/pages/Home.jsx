import { motion } from "framer-motion";
import { LinkContainer } from "react-router-bootstrap";
import Auth from '../utils/auth';
import { useLocation } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Home() {

  let { state } = useLocation();

  return (
    <>
        <h1> Welcome to Keep Reacting and No One Gets Sued!</h1>
        <Row className={'justify-content-center'}>
        {state?.scoreSubmit && 
          <Alert variant='success' style={{width: '50%'}}>
              Your Score has been Saved! Head to the <Link to='/scores'>Scores tab</Link> to see how you ranked!
          </Alert>}
        </Row>
        <Row className={'justify-content-center'}>
          <LinkContainer to="/game">
            <Button>Play</Button>
          </LinkContainer>
        </Row>
        <Button href="https://www.bombmanual.com/web/index.html" target="_blank">Manual</Button>

        <p style={{textAlign: 'left'}}>Welcome to our little ripoff of <a href='https://keeptalkinggame.com/'>Keep Talking and Nobody Explodes,</a> made entirely in React!
        </p>
    </>
  );
}
