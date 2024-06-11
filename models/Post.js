const { Schema } = require('mongoose')

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    caption: { type: String },
    firstName: { type: String }
  },
  { timestamps: true }
)

module.exports = postSchema
