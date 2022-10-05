const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type GameSearched {
    id: ID
    slug: String
    name: String
    description: String
    released: String
    background_image: String
    website: String
    platforms: [Platform]
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
    released_at: String
  }
  type Results {
    id: ID
    name: String
    background_image: String 
    metacritic: Int
    platforms : [Platform]
    genres: [Genres]
  }
  type Games {
    results: [Results]!
  }
 
  type Review{
    _id:ID
    reviewText:String
    createdAt:String
    email:String

  }
  type User {
    _id: ID
    username: String
    email: String
    reviews: [Review]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    reviews(email: String): [Review]  
    me: User
    searchGame(id: String!): GameSearched!
  }
  type Mutation {
    addUser( username: String!, email: String!, password: String!): Auth
    updateUser(username: String!, email: String, password: String): User
    addReview(reviewText: String!): Review
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
