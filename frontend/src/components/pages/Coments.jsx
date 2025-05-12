import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const Coments = ({ postId }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`http://localhost:2636/api/coments/post/${postId}`)
        const data = await res.json()
        console.log('🗨️ Comentarios recibidos:', data)
        setComments(Array.isArray(data.coments) ? data.coments : [])
      } catch (err) {
        console.error('Error al obtener los comentarios:', err)
      }
    }

    if (postId) fetchComments()
  }, [postId])

  return (
    <Container>
      <h2>Comentarios del post</h2>
      {comments.length === 0 ? (
        <p>No hay comentarios aún.</p>
      ) : (
        comments.map((comment) => (
          <ComentCard key={comment._id}>
            <p><strong>Usuario:</strong> {comment.user}</p>
            <p><strong>Fecha:</strong> {new Date(comment.date).toLocaleString()}</p>
            <p>{comment.content}</p>
          </ComentCard>
        ))
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  color: white;
`

const ComentCard = styled.div`
  background-color: #222;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  
`
