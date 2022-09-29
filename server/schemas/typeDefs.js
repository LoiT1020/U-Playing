const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type GameSearched {
    id: ID
    name: String
    description: String
    released: String
    background_image: String
    website: String
    rating: Int
    genres: [Genres]

  }
  type Search {
    count: Int!
    results: [GameSearched]!

  }
  type Genres {
    id: Int
    name: String
  }
  type PlatformInfo {
    id: Int!
    name: String
  }
  type Platform {
    platform: PlatformInfo
    releasedAt: String
  }
  type Results {
    id: ID
    name: String
    background_image: String 
    rating: Int!
    metacritic: Int
    platforms : [Platform]
    genres: [Genres]
  }
  type Games {
    count: Int!
    results: [Results]!

  }
  type playlist {
    _id: ID
   
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    playlist: [playlist]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
   allGames: Games!
   searchGame(id: Int!): Search!
    user: User
    playlist(_id: ID!): playlist
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
