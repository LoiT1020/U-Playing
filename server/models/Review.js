const { Schema, model } = require('mongoose');
const replySchema = require('./Reply');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema(
  {
    reviewText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    email: {
      type: String,
      required: true
    },
    replies: [replySchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

reviewSchema.virtual('replyCount').get(function() {
  return this.reactions.length;
});

const Review = model('Review', reviewSchema);

module.exports = Review;
