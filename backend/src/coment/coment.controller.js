import Coment from "./coment.model.js"

export const makeComent = async (req, res) => {
    try {
        const data = req.body;
        console.log('Comentario recibido:', data)

        const coment = new Coment(data);
        await coment.save();

        return res.send({ message: 'Comentario publicado con éxito' })
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error al publicar comentario', err })
    }
}

export const getComentsByPost = async (req, res) => {
    try {
        const { postId } = req.params
        const coments = await Coment.find({ post: postId })
                .sort({ date: -1 })
    
        return res.send({ message: 'Comentarios del post obtenidos', coments })
    } catch (err) {
        console.error('Error al obtener comentarios por post:', err)
        return res.status(500).send({ message: 'Error general', err })
    }
}

export const countComentsByPost = async (req, res) => {
    try {
        const { postId } = req.params

        const count = await Coment.countDocuments({ post: postId })

        return res.send({ message: 'Cantidad de comentarios obtenida', count })
    } catch (err) {
        console.error('Error al contar comentarios:', err)
        return res.status(500).send({ message: 'Error al contar comentarios', err })
    }
}