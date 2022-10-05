const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
   username:String
    email: String
    reviews:[Review]
  }
  type Review{
    _id:ID
    reviewText:String
    createdAt:String
    username:String
    replyCount:Int
    replies:[Reply]
  }
type Reply{
  _id:ID
  replyBody: String
  createdAt:String
  username: String
}

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    reviews(username: String): [Review]
    users: [User]

  }
  type Mutation {
    addUser(username:String!, email: String!, password: String!): Auth
    updateUser(username:String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addReview(reviewText: String!): Review
  }
`;

module.exports = typeDefs;
