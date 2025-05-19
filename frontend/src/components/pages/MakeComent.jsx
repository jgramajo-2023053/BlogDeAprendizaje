import React, { useState } from 'react'
import styled from 'styled-components'

export const MakeComent = ({ postId, onCommentMade }) => {
  const [user, setUser] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async () => {
    const comentData = {
      user,
      content,
      post: postId
    }

    try {
      const res = await fetch('http://localhost:2636/api/coments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comentData)
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.message || 'Error desconocido')
      }

      const data = await res.json()
      alert(data.message)
      setUser('')
      setContent('')
      onCommentMade()
    } catch (err) {
      console.error('Error al comentar:', err)
      alert('Error al crear el comentario')
    }
  }

  return (
    <Container>
      <h3>Agregar comentario</h3>

      <p>Usuario</p>
      <input type="text" value={user} onChange={e => setUser(e.target.value)} />

      <p>Comentario</p>
      <textarea value={content} onChange={e => setContent(e.target.value)} />

      <br />
      <button 
        onClick={handleSubmit} 
        disabled={!user.trim() || !content.trim()}>
        Comentar
      </button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem;

  input{
    width: 80%;
  }

  textarea{
    width: 80%;
    resize: none;
  }

  button{
    width: 80%;
  }
`

