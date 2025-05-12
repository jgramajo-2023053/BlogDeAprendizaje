import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PrincipalPost = () => {
  const [posts, setPosts] = useState([])
  const [selectedCurse, setSelectedCurse] = useState('')

  const courses = [
    { id: '', name: 'Todos' },
    { id: '65a123456789abcdef123450', name: 'Tecnología' },
    { id: '65a123456789abcdef123451', name: 'Practica Supervisada' },
    { id: '65a123456789abcdef123452', name: 'Taller' }
  ]

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let url = 'http://localhost:2636/api/posts'
        if (selectedCurse) url += `?curse=${selectedCurse}`

        const res = await fetch(url)
        const data = await res.json()
        setPosts(Array.isArray(data.post) ? data.post : [])
      } catch (err) {
        console.error('Error al obtener los posts:', err)
      }
    }

    fetchPosts()
  }, [selectedCurse])

  return (
    <Container>
      <h2>Publicaciones recientes</h2>

      <FilterButtons>
        {courses.map(c => (
          <button
            key={c.id}
            onClick={() => setSelectedCurse(c.id)}
            style={{ backgroundColor: selectedCurse === c.id ? '#444' : '#222', color: 'white' }}
          >
            {c.name}
          </button>
        ))}
      </FilterButtons>

      {posts.length === 0 ? (
        <p>No hay publicaciones.</p>
      ) : (
        posts.map(post => (
          <PostCard key={post._id}>
            <h2>
              <StyledLink to={`/post/${post._id}`}>{post.title}</StyledLink>
            </h2>
            <p><strong>Fecha:</strong> {new Date(post.date).toLocaleString()}</p>
            <p><strong>Curso:</strong> {post.curse.name}</p>
          </PostCard>
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
  background-color:rgb(14, 14, 14);
  border-radius: 15px;
`

const PostCard = styled.div`
  background-color: #222;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
`

const StyledLink = styled(Link)`
  color: #f1f1f1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color:rgb(190, 244, 253);
  }
`

const FilterButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`
