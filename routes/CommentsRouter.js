var express = require('express')
var router = express.Router()
const CommentCtrl = require('../controllers/CommentController')

//show all comments
router.get('/posts/:id/comments', CommentCtrl.index)
//create new comment
router.post('/posts/:id/comments', CommentCtrl.create)
//delete a comment
router.delete('/comments/:id', CommentCtrl.delete)

module.exports = router
