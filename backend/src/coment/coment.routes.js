import { Router } from 'express'
import { getComentsByPost, makeComent, countComentsByPost } from './coment.controller.js'

const api = Router()

api.post('/', makeComent)
api.get('/post/:postId', getComentsByPost)
api.get('/post/:postId/count', countComentsByPost)

export default api