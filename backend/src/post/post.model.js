import { Schema, model, Types } from "mongoose"

const postSchema = Schema(
    {
        title:{
            type: String,
            required: [true, 'Title is required']
        },
        curse:{
            type: Types.ObjectId,
            ref: 'Curse',
            required: [true, 'Curse is required']
        },
        text:{
            type: String,
            required: [true, 'Text is required']
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
)

export default model('Post', postSchema)