import {
    ADD_PUZZLE,
    REMOVE_PUZZLE,
    INCREASE_SCORE
  } from './actions';

  export default function reducer(state, action) {
    // array for converting triage levels to point values
    const triage = [10, 25, 50];

    switch (action.type) {
        case ADD_PUZZLE: {
            return {
                ...state,
                puzzles: [...state.puzzles, action.payload],
                pointIncrement: state.pointIncrement + triage[action.payload.triageLevel]
            }
        }

        case REMOVE_PUZZLE: {
            return {
                ...state,
                puzzles: [...state.puzzles].filter(
                (puzzle) => puzzle.id !== action.payload
                ),
                pointIncrement: state.pointIncrement - triage[action.payload.triageLevel],
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