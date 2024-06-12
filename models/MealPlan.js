const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planDescriptionSchema = new Schema({
  index: Number,
  breakfast: String,
  snack: String,
  lunch: String,
  dinner: String
})

const mealPlanSchema = new Schema(
  {
    planName: String,
    planDescription: [planDescriptionSchema],
    calories: Number,
    category: String,
    userRef: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
)

module.exports = mealPlanSchema
