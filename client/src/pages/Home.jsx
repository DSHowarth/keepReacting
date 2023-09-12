import { motion } from "framer-motion";
import { LinkContainer } from "react-router-bootstrap";
import Auth from '../utils/auth';
import { useLocation } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

export default function Home() {

  let { state } = useLocation();

  return (
    <>
      <h1> Welcome to the Game</h1>
      {/* TODO: Make this more visually appealing */}
      {state?.scoreSubmit && 
        <Alert variant='success'>Your Score has been Saved! Head to the <Link to='/scores'>Scores tab</Link> to see how you ranked!</Alert>}
      <LinkContainer to="/game">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          type="submit"
          disabled={!Auth.loggedIn()}
          className={'playButton'}
        >
          Play
        </motion.button>
      </LinkContainer>
      {!Auth.loggedIn() && 
        <p>Please log in to play the game. Viewing the manual can be done by anyone, though!</p>}
      <br />
      <LinkContainer to="/manual">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          type="submit"
          className={'manualButton'}
        >
          Manual
        </motion.button>
      </LinkContainer>
    </>
  );
}
