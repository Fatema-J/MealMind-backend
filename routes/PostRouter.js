const router = require('express').Router()
const controller = require('../controllers/PostController')

router.get('/', controller.GetPosts)
router.post('/', controller.CreatePost)
router.put('/:post_id', controller.UpdatePost)
router.delete('/:post_id', controller.DeletePost)

module.exports = router
