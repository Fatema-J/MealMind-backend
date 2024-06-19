const { Post } = require('../models')

const GetPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate('user').populate('comments')
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetPlanPosts = async (req, res) => {
  try {
    const posts = await Post.find({ plan: req.params.plan_id })
      .populate('user')
      .populate('comments')
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetOnePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id)
      .populate('user')
      .populate('comments')
    res.send(post)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    console.log(req.body)
    const post = await Post.create({ ...req.body })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.post_id, req.body, {
      new: true
    })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.post_id })
    res.send({ msg: 'Post Deleted', payload: req.params.post_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPosts,
  GetOnePost,
  GetPlanPosts,
  CreatePost,
  UpdatePost,
  DeletePost
}
