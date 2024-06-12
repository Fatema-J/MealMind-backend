const mongodb = require('mongodb')
const { MealPlan } = require('../models')
const { getGroqChatCompletion } = require('./AIController')

const index = async (req, res) => {
  try {
    const mealPlans = await MealPlan.find({})
    res.send(mealPlans)
  } catch (error) {
    throw error
  }
}

const show = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findById(req.params.id)
    res.send(mealPlan)
  } catch (error) {
    throw error
  }
}

const create = async (req, res) => {
  try {
    const response = await getGroqChatCompletion(
      'I want to lose weight, currently 80kg and 150cm'
    )

    console.log('the response', response)

    //create from the response of the api
    const mealPlan = await MealPlan.create(JSON.parse(response)) //({}) will be changed accordingly

    console.log('meal plan item', mealPlan)
    res.send(mealPlan)
  } catch (error) {
    throw error
  }
}

const deleteMealPlan = async (req, res) => {
  try {
    await MealPlan.deleteOne({ _id: req.params.id })
    res.send({
      msg: 'Meal Plan Deleted',
      payload: req.params.id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  index,
  show,
  create,
  delete: deleteMealPlan
}
