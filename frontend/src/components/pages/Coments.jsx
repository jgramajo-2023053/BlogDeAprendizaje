import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const Coments = ({ postId, refreshTrigger }) => {
  const [comments, setComments] = useState([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`http://localhost:2636/api/coments/post/${postId}`)
        const data = await res.json()
        console.log('Comentarios recibidos:', data)
        setComments(Array.isArray(data.coments) ? data.coments : [])
      } catch (err) {
        console.error('Error al obtener los comentarios:', err)
      }
    }

    if (postId) fetchComments()
  }, [postId, refreshTrigger])

  const visibleComments = showAll ? comments : comments.slice(0, 3)

  return (
    <Container>
      <h2>Comentarios del post ({comments.length})</h2>
      {comments.length === 0 ? (
        <p>No hay comentarios aún.</p>
      ) : (
        <>
          {visibleComments.map((comment) => (
            <ComentCard key={comment._id}>
              <Top>
                <p><strong>{comment.user}</strong></p>
                <p><strong>Fecha:</strong> {new Date(comment.date).toLocaleString()}</p>
              </Top>
              <p>{comment.content}</p>
            </ComentCard>
          ))}

          {comments.length > 3 && (
            <ToggleButton onClick={() => setShowAll(prev => !prev)}>
              {showAll ? 'Mostrar menos' : 'Mostrar todos'}
            </ToggleButton>
          )}
        </>
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

const Top = styled.div`
  display: flex;
  flex-direction: row;

  p {
    margin-right: 5%;
  }
`

const ToggleButton = styled.button`
  background-color: transparent;
  color: #a2d2ff;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  align-self: flex-start;
  padding: 0;
  margin-top: -1rem;

  &:hover {
    text-decoration: underline;
  }
`
