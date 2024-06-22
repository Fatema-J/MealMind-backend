const mongodb = require('mongodb')
const { MealPlan } = require('../models')
const { getGroqChatCompletion } = require('./AIController')

const userMealPlans = async (req, res) => {
  try {
    const userId = req.query.userId
    // Filter meal plans by user ID
    const mealPlans = await MealPlan.find({ userRef: userId })
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
    // Extract user input from the request body
    const userData = req.body

    // extract user ID
    const userID = userData.user

    delete userData.user

    // Construct a user response string based on the extracted data
    const userResponse = `I am ${userData.gender}, born on ${userData.dob}, currently weight ${userData.weight}${userData.units.weight}, and am ${userData.height}${userData.units.height} tall. My goal is to ${userData.goal}. My activity level is ${userData.activityLevel}. I have dietary preferences of ${userData.dietaryRestrictions} and medical conditions of ${userData.medicalConditions}. My daily routine is ${userData.dailyRoutine} and I drink ${userData.waterIntake} of water per day.`

    // Get the meal plan from Groq API
    const response = await getGroqChatCompletion(userResponse)

    // Adding userID to the response
    const parsedResponse = JSON.parse(response)
    parsedResponse.userRef = userID

    // Create a new meal plan from the response
    const mealPlan = await MealPlan.create(parsedResponse)
    res.send(mealPlan)
  } catch (error) {
    console.error(error)
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
  index: userMealPlans,
  show,
  create,
  delete: deleteMealPlan
}
