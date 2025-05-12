import Post from "./post.model.js";

/*  Francamente, pensaba que debía poder hacer post desde 
    el frontend, pero luego me dijeron que no, así que 
    quedé 🤡. Me dio algo de miedo borrarlo, así que lo 
    dejaré así. */


export const makePost = async(req, res)=>{
    try {
        let data = req.body
        console.log(' Body recibido:', data)
        let post = new Post(data)
        await post.save()
        return res.send({message: `The publication: ${data.title}, is posted`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'General Error', err})
    }
}

export const deletePost = async(req, res)=>{
    try{
        let { id } = req.params
        let post = await Post.findById(id)
        if (!post) return res.status(404).send({message: 'Publication not found'})

        await Post.findByIdAndDelete(id)
        return res.send({message: `${post.title} was deleted`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'General Error', err})
    }
}

export const getPosts = async (req, res) => {
    try {
      const { curse } = req.query // <-- obtiene el curso si viene
  
      let filter = {}
      if (curse) filter.curse = curse
  
      let post = await Post.find(filter).populate('curse', 'name')
  
      return res.send({ message: 'Publications found successfully', post })
    } catch (err) {
      console.error(err)
      return res.status(500).send({ message: 'General Error', err })
    }
}

export const getPublicationById = async (req, res) => {
    try {
        let { id } = req.params;

        let post = await Post.findById(id).populate('curse', 'name description')

        if (!post) {
            return res.status(404).send({ message: 'Post not found' })
        }

        return res.send({ message: 'Post found successfully', post })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'General Error', err })
    }
}