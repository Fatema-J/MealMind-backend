const mongodb = require('mongodb')
const { MealPlan } = require('../models')

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
    //create from the response of the api
    const mealPlan = await MealPlan.create({}) //({}) will be changed accordingly
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
