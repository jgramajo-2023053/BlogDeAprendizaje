import { Schema, model, Types } from 'mongoose'

const commentSchema = Schema({
  user: {
    type: String,
    required: [true, 'User is required']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  post: {
    type: Types.ObjectId,
    ref: 'Post',
    required: [true, 'Post is required']
  },
  date: {
    type: Date,
    default: Date.now
  }
})

export default model('Comment', commentSchema)