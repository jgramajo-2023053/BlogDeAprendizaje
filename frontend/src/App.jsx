import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import { HeadBar } from './components/headBar.jsx'
import { PrincipalPost } from './components/pages/PrincipalPost.jsx'
import { OnePost } from './components/pages/OnePost.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <Container>
        <HeadBar />
        <Content>
          <Routes>
            <Route path="/" element={<PrincipalPost />} />
            <Route path="/post/:id" element={<OnePost />} />
          </Routes>
        </Content>
      </Container>
    </BrowserRouter>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
`

const Content = styled.div`
  padding: 2rem;
`