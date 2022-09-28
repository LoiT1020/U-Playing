const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, playlist } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {};

module.exports = resolvers;
