const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, playlist } = require('../models');
const { signToken } = require('../utils/auth');

const fetch = require('node-fetch');
const resolvers = {

    Query: {
        allGames : async() => {
            const response = await fetch(`https://rawg.io/api/games?token&key=${process.env.REACT_APP_API_KEY}`);
            return response.json();
        },
        searchGame: async(_, {id}) => { 
            const response = await fetch(`https://api.rawg.io/api/games/${id}?token&key=${process.env.REACT_APP_API_KEY}`);
            return response.json();
        },
        user: async (parent, args, context) => {
            if(context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: '',
                    populate: ''
                });
                return user;
            }
            throw new AuthenticationError('Not Logged In');
        },
        playlist: async (parent, {_id}, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: '',
                    populate: ''
                });
                return user.playlist.id(_id);
            }
        }
        
    }
};

module.exports = resolvers;
