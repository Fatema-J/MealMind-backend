const mongoose = require('mongoose')
const userSchema = require('./User')
const postSchema = require('./Post')
const mealPlanSchema = require('./MealPlan')
const commentSchema = require('./Comment')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)
const MealPlan = mongoose.model('MealPlan', mealPlanSchema)
const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
  User,
  Post,
  MealPlan,
  Comment
}
