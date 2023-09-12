import { motion } from "framer-motion";
import { LinkContainer } from "react-router-bootstrap";

export default function Home() {
  return (
    <>
      <h1> Welcome to the Game</h1>
      <LinkContainer to="/game">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          type="submit"
        >
          Play
        </motion.button>
      </LinkContainer>
      <br />
      <LinkContainer to="/manual">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          type="submit"
        >
          Manual
        </motion.button>
      </LinkContainer>
    </>
  );
}
