const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mealPlanSchema = new Schema(
  {
    planName: String,
    planDescription: String,
    calories: Number,
    category: String,
    userRef: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('MealPlan', mealPlanSchema)
