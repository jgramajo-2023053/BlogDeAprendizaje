import { Router } from 'express'
import { getComentsByPost, makeComent } from './coment.controller.js'

const api = Router()

api.post('/', makeComent)
api.get('/post/:postId', getComentsByPost)

export default api