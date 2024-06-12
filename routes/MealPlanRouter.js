var express = require('express')
var router = express.Router()
const mealPlanCtrl = require('../controllers/MealPlanController')
const middleware = require('../middleware')

//show all plans
router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  mealPlanCtrl.index
)
//show one plan
router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  mealPlanCtrl.show
)
//create new plan
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  mealPlanCtrl.create
)
//delete plan
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  mealPlanCtrl.delete
)

module.exports = router
