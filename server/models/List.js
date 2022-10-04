const mongoose = require('mongoose');

const { Schema } = mongoose;

const playlistSchema = new Schema({
 
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: ''
    }
  ]
});

const playlist = mongoose.model('playlist', playlistSchema);

module.exports = playlist;
