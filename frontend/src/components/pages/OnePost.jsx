import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { MakeComent } from './MakeComent.jsx'
import { Coments } from './Coments.jsx'

export const OnePost = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:2636/api/posts/${id}`)
        const data = await res.json()
        setPost(data.post)
      } catch (err) {
        console.error('Error al obtener el post:', err)
      }
    }

    fetchPost()
  }, [id])

  if (!post) return <Container>Cargando...</Container>

  return (
    <Container>
      <Post>
        <h2>{post.title}</h2>
        <p><strong>Fecha:</strong> {new Date(post.date).toLocaleString()}</p>
        <p><strong>Curso:</strong> {post.curse?.name}</p>
        <p>{post.text}</p>
      </Post>
      <Coment>
        <MakeComent postId={post._id}/>
        <Coments postId={post._id} />
      </Coment>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    padding: 2rem;
    color: white;
    align-items: flex-start;
`
const Post = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 2%;
    width: 50%;
    border-radius: 15px;
    background-color:rgb(27, 27, 27);
`

const Coment = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 2%;
    width: 40%;
    border-radius: 15px;
    background-color:rgb(27, 27, 27);
    max-height: 800px;       /* Altura máxima */
  overflow-y: auto;  
`