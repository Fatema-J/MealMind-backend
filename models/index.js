const mongoose = require('mongoose')
const userSchema = require('./User')
const postSchema = require('./Post')
const mealPlanSchema = require('./MealPlan')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)
const MealPlan = mongoose.model('MealPlan', mealPlanSchema)

module.exports = {
  User,
  Post,
  MealPlan
}
