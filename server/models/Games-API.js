const mongoose = require('mongoose');

const Platform= require ('./Platform');
const Genres=require ('./Genre')

const { Schema } = mongoose;

const ResultsSchema= new Schema({
  id: {
    type: Number,
    required: true,
  },
  name:{
    type:String,
    required: true,
  },
  background_image:
  {
    type: String,
  },
  rating:{
    type:Number,
    required: true
  },
  metacritic: {
    type:Number,
    required: true,
  },
  platforms:[Platform],
  genres:[Genres]

})

const Results = mongoose.model ('Results',ResultsSchema)

const GameSchema = new Schema({
  results:[Results.schema]
});

const Games = mongoose.model('Games', GameSchema);

module.exports = Games;
