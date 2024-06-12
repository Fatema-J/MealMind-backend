const { Schema } = require('mongoose')

const postSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    caption: { type: String }
  },
  { timestamps: true }
)

module.exports = postSchema