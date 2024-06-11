var express = require('express')
var router = express.Router()
const mealPlanCtrl = require('../controllers/MealPlanController')

//show all plans
router.get('/', mealPlanCtrl.index)
//show one plan
router.get('/:id', mealPlanCtrl.show)
//create new plan
router.post('/', mealPlanCtrl.create)
//delete plan
router.delete('/:id', mealPlanCtrl.delete)

module.exports = router