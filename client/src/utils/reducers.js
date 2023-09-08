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
    }
  }