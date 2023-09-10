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
  mutation addScore($score: Int!, $date: Int!, $teammates: String, $user: ID!){
    addScore(score: $score, date: $date, teammates: $teammates, user: $user){
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