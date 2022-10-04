const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const Pfinfoschema= new Schema ({
    id: {
      type:Number,
      
    },
    name:{
      type: String,
      required: true,
    }
});

const PlatformInfo= mongoose.model('PlatformInfo',Pfinfoschema)

const Platformschema = new Schema ({
    platform: [PlatformInfo.schema],
    released_at: {
        type: Date
    }
})
 

const Platform= mongoose.model ('Platform',Platformschema)

module.exports = Platform;