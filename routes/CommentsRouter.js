var express = require('express')
var router = express.Router()
const CommentCtrl = require('../controllers/CommentController')

//show all comments
router.get('/posts/:post_id/comments', CommentCtrl.index)
//create new comment
router.post('/posts/:post_id/comments', CommentCtrl.create)
// update a comment
router.put('/posts/comments/:id', CommentCtrl.update)
//delete a comment
router.delete('/posts/comments/:id', CommentCtrl.delete)

module.exports = router
