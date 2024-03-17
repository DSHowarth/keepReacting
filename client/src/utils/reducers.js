import {
    ADD_PUZZLE,
    REMOVE_PUZZLE,
    REDUCE_TIMER
  } from './actions';

  export default function reducer(state, action) {


    switch (action.type) {
        case ADD_PUZZLE: {
            return {
                ...state,
                puzzles: [...state.puzzles, action.payload]
            }
        }

        case REMOVE_PUZZLE: {
            return {
                ...state,
                puzzles: [...state.puzzles].filter(
                (puzzle) => puzzle.id !== action.payload.puzzleId
                )
            };
        }

        case REDUCE_TIMER: {
            return {
                ...state,
                timeRemaining: state.timeRemaining -= 1
            }
        }
    }
  }