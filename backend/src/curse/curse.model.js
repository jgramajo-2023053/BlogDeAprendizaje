import { Schema, model } from 'mongoose'

const curseSchema = Schema(
    {
        name:{
            type: String,
            required: [true, "Name is required"]
        },
        professor:{
            type: String,
            required: [true, "Name is required"]
        },
        description:{
            type: String,
            required: [true, "Name is required"]
        }
    }
)

export default model('Curse', curseSchema)