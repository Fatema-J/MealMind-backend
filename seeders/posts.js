const mongoose = require('mongoose')
const falso = require('@ngneat/falso')
const { Post } = require('../models')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const createPosts = async () => {
  let posts = [...Array(10)].map((item, idx) => ({
    title: falso.randCatchPhrase().toString(),
    body: falso.randPhrase().toString(),
    image: `https://picsum.photos/500/500?random=${idx}`
  }))

  await Post.deleteMany({})
  console.log('Creating posts . . .')
  await Post.insertMany(posts)
  console.log('Posts created!')

  mongoose.connection.close()
}

createPosts()
