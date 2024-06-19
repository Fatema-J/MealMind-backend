var express = require('express')
var router = express.Router()
const CommentCtrl = require('../controllers/CommentController')
const middleware = require('../middleware')

//show all comments
router.get(
  '/posts/:post_id/comments',
  middleware.stripToken,
  middleware.verifyToken,
  CommentCtrl.index
)
//create new comment
router.post(
  '/posts/:post_id/comments',
  middleware.stripToken,
  middleware.verifyToken,
  CommentCtrl.create
)
// update a comment
router.put(
  '/posts/:post_id/comments/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  CommentCtrl.update
)
//delete a comment
router.delete(
  '/posts/:post_id/comments/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  CommentCtrl.delete
)

module.exports = router
