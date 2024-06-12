const { Schema } = require('mongoose')
const commentSchema = require('./Comment')

const postSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    caption: { type: String },
    comments: [commentSchema]
  },
  { timestamps: true }
)

module.exports = postSchema
