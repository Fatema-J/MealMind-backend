const mongodb = require('mongodb')
const { Comment } = require('../models')
const { Post } = require('../models')

const index = async (req, res) => {
  try {
    const comments = await Comment.find({})
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const create = async (req, res) => {
  try {
    const comment = await Comment.create(req.body)
    // adding the comment to the post
    const post = await Post.findById(req.params.post_id)
    post.comments.push(comment._id)
    await post.save()

    res.send(comment)
  } catch (error) {
    throw error
  }
}

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.comment_id,
      req.body,
      {
        new: true
      }
    )
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const deleteComment = async (req, res) => {
  try {
    await Comment.deleteOne({ _id: req.params.comment_id })
    //delete the reference
    await Post.findByIdAndUpdate(req.params.post_id, {
      $pull: { comments: req.params.comment_id }
    })
    res.send({
      msg: 'Comment Deleted',
      payload: req.params.comment_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  index,
  create,
  update: updateComment,
  delete: deleteComment
}
