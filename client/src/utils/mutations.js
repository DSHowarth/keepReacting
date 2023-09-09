import { gql } from '@apollo/client'

export const ADD_SCORE = gql`
    mutation newScore($input: ScoreInput!) {
        addScore(input: $input) {
            score
            date
            teammates
            userId
        }
    }
`