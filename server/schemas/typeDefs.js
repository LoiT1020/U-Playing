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
    rating: Int!
    metacritic: Int
    platforms : [Platform]
    genres: [Genres]
  }
  type Games {
    count: Int!
    results: [Results]!
  }
  type Category {
    _id: ID
    name: String
  }
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
  }
  type playlist {
    _id: ID
    products: [Product]
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
   searchGame(id: String!): GameSearched!
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    playlist(_id: ID!): playlist
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addplaylist(products: [ID]!): playlist
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
