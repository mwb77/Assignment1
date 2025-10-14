import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

import dotenv from 'dotenv'
dotenv.config()

await initDatabase()

const post = new Post({
  title: 'Another Post',
  author: 'From Someone',
  contents: 'This is another test post.',
  tags: ['frontend'],
})

await post.save()

const posts = await Post.find()
console.log(posts)
