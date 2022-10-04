const mongoose = require('mongoose');

const { Schema } = mongoose;

const GenreSchema = new Schema({

    id:{
        type:Number
    },
    name:{
        type : String,
        required: true,
    }
});

const Genres = mongoose.model('Genres', GenreSchema);

module.exports = Genres;