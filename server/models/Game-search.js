const mongoose = require('mongoose');

const Platform=require('./Platform');

const { Schema } = mongoose;

const onegame = new Schema({
    id: {
        type:Number
    },
    slug:{
        type:String,
        require: true
    },
    name: {
        type:String,
        require: true
    },
    descriptions: { 
        type:String,
        require: true
    },
    release: {
        type: Date
    },
    background_image: {
        type:String
    },
    website: {
        type: String
    },
    platform: [Platform]

})

const GameSearched= mongoose.model('GameSearched',onegame)

module.exposrts= GameSearched;