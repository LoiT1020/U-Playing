const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, playlist } = require('../models');
const { signToken } = require('../utils/auth');

const fetch = require('node-fetch');


const resolvers = {

    Query: {
        allGames : async() => {
            const response = await fetch(`https://rawg.io/api/games?token&key=33761726586d462d81dbf4018fe2e169`);
            return response.json();
        },
        searchGame: async(_, {id}) => { 
            const response = await fetch(`https://api.rawg.io/api/games/${id}?token&key=33761726586d462d81dbf4018fe2e169`);
            return response.json();
        },
        users: async ()=> {
            return User.find()
            .select('-__v -password')
            
        },
        // playlist: async (parent, {_id}, context) => {
        //     if (context.user) {
        //         const user = await User.findById(context.user._id).populate({
        //             path: 'playlist.Results.name',
        //             populate: 'playlist'
        //         });
        //         return user.playlist.id(_id);
        //     }
        // }
        
    },
    Mutation: {
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});
            if (!user) {
                throw new AuthenticationError('incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return {token, user};
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, {new: true});
            }
            throw new AuthenticationError('Not Logged In ')
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user};
        },
       
    }
};

module.exports = resolvers;
