import {
    ADD_PUZZLE,
    REMOVE_PUZZLE,
    INCREASE_SCORE
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
                (puzzle) => puzzle.id !== action.payload
                ),
            };
        }
        
        case INCREASE_SCORE: {

            const newScore = state.points + action.payload
            
            return {
                ...state,
                points: newScore 
            }
        }
    }
  }