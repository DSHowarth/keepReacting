import {
    ADD_PUZZLE,
    REDUCE_TIMER,
    COMPLETE_PUZZLE
  } from './actions';

  export default function reducer(state, action) {


    switch (action.type) {
        case ADD_PUZZLE: {
            return {
                ...state,
                puzzles: [...state.puzzles, action.payload]
            }
        }

        case REDUCE_TIMER: {
            return {
                ...state,
                timeRemaining: state.timeRemaining -= 1
            }
        }

        case COMPLETE_PUZZLE: {
            console.log(state)
            return {
                ...state,
                puzzles: [...state.puzzles].map(
                    (puzzle) =>  {
                        if(puzzle.id == action.payload.puzzleId) {
                            puzzle.complete = true
                        }
                        return puzzle
                    }
                )
            }
        }
    }
  }