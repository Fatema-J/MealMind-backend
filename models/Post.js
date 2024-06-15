const { Schema } = require('mongoose')

const postSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    plan: { type: Schema.Types.ObjectId, ref: 'Plan' },
    title: { type: String, required: true },
    caption: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true }
)

module.exports = postSchema
