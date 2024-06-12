const mongodb = require('mongodb')
const { Comment } = require('../models')

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
    //create from the response of the api
    const comment = await Comment.create(req.body) //({}) will be changed accordingly
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const updateComment = async (req, res) => {
  try {
    console.log(`reached ${req.body}`)
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const deleteComment = async (req, res) => {
  try {
    await Comment.deleteOne({ _id: req.params.id })
    res.send({
      msg: 'Comment Deleted',
      payload: req.params.id,
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
