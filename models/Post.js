const { Schema } = require('mongoose')

const postSchema = new Schema(
  {
    user: { type: Schema.Type.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    caption: { type: String },
    physicalActivityLevel: { type: String }
  },
  { timestamps: true }
)

module.exports = postSchema
