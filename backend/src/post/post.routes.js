import { Router } from 'express';
import { deletePost, getPosts, getPublicationById, makePost } from './post.controller.js';

const api = Router();

api.post('/', makePost);
api.get('/', getPosts);
api.get('/:id', getPublicationById);
api.delete('/:id', deletePost);

export default api;