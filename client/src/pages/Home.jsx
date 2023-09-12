import { motion } from "framer-motion";
import { LinkContainer } from "react-router-bootstrap";
import Auth from '../utils/auth';

export default function Home() {
  return (
    <>
      <h1> Welcome to the Game</h1>
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
