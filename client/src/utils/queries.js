import { gql } from '@apollo/client'

export const QUERY_SCORES = gql`
  query scores {
    scores {
      _id
      score
      date
      teammates
      user {
        username
      }
    }
  }
`;