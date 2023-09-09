import { gql } from '@apollo/client'

export const QUERY_SCORES = gql`
  {
    scores {
      _id
      score
      date
      teammates 
    }
  }
`