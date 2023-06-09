import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation Mutation($firstname: String!, $username: String!, $email: String!, $password: String!, $genre: String, $bio: String) {
  addUser(firstname: $firstname, username: $username, email: $email, password: $password, genre: $genre, bio: $bio) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const ADD_MOVIE = gql`
  mutation addMovie($posterImg: String, $title: String, $releaseDate: String, $description: String, $rating: String, $updatedAt: String) {
    addMovie(posterImg: $posterImg, title: $title, releaseDate: $releaseDate, description: $description, rating: $rating, updatedAt: $updatedAt) {
      _id
      posterImg
      title
      releaseDate
      description
      rating
      updatedAt
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation AddFriend($friendId: ID!) {
    addFriend(friendId: $friendId) {
      _id
      firstname
      username
      avatar
      email
      genre
      bio
      myList {
        _id
        posterImg
        title
        releaseDate
        description
        rating
        createdAt
      }
      watched {
        _id
        posterImg
        title
        releaseDate
        description
        rating
        createdAt
      }
      friends {
        _id
        firstname
        username
        avatar
        email
        genre
        bio
      }
    }
  }
`;