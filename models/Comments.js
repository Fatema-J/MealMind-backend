const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    comment: String,
    userRef: { type: Schema.Types.ObjectId, ref: 'User' },
    postRef: { type: Schema.Types.ObjectId, ref: 'Post' }
  },
  {
    timestamps: true
  }
)

