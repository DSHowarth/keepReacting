<<<<<<< HEAD
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
=======
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SCORE = gql`
  mutation addScore($input: ScoreInput!){
    addScore(input: $input){
      _id
      score
      date
      teammates
      user {
        _id
        username
      }
    }
  }
`;
>>>>>>> 4426b5568e26bee58371a33d7ccef33c075ef549
