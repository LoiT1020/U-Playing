const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, playlist } = require('../models');
const { signToken } = require('../utils/auth');
const {FetchGames, FetchSearch} = require('../utils/rawgAPI')
const dotenv = require('dotenv')
const fetch = require('node-fetch');
const resolvers = {
    Query: {
        allGames : async() => {
            const response = await fetch(`https://rawg.io/api/games?token&key=${process.env.REACT_APP_API_KEY}`);
            return response.json();
        },
        searchGame: async(_, {id}) => {
            const response = await fetch(`https://api.rawg.io/api/games/${id}?token&key=${process.env.API_KEY}`);
            return response.json();
        }
    }
};

module.exports = resolvers;
