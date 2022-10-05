const { AuthenticationError } = require('apollo-server-express');
const { User, Review} = require('../models');
const { signToken } = require('../utils/auth');

const fetch = require('node-fetch');


const resolvers = {

    Query: {
        users: async ()=> {
            return User.find()
            .select('-__v -password')
            
        },
        reviews : async(parent, {email}) => {
            const params = email ? {email} : {};
            return Review.find(params).sort({createdAt: -1})
        },
        allGames : async() => {
            const response = await fetch(`https://rawg.io/api/games?token&key=${process.env.REACT_APP_API_KEY}`);
            return response.json();
        },
        searchGame: async(_, {id}) => { 
            const response = await fetch(`https://api.rawg.io/api/games/${id}?token&key=${process.env.REACT_APP_API_KEY}`);
            return response.json();
        },
        me : async (parent, {_id}) => {
            if(context.user) {
                const userData = await User.findOne({_id: context.user._id}).select(
                    "-__v -password"
                );
                return userData;
            }
        }
        
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
        addReview: async (parent, args, context) => {
            if (context.user) {
              
                console.log(context.user)
    
                const review = await Review.create({ ...args, email: context.user.email });
    
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { reviews: review._id } },
                    { new: true }
                );
    
                return review;
            }
    
            throw new AuthenticationError('You need to be logged in!');
        },
       
    }
};

module.exports = resolvers;
