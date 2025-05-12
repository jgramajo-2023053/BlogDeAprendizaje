import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeadBar = () => {
  return (
    <HeadBanner>
        <StyledLink to="/">Home</StyledLink>
        <h2>Blog de aprendizaje</h2>
    </HeadBanner>
  )
}

const HeadBanner = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color:rgb(22, 42, 99);
    align-items: center;
    justify-content: space-between;
    color: white;
    border-radius: 0 0 15px 15px;

    h2{
    margin-right: 40%;
    }

`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin-left: 5%;
  transition: 0.5s;

  &:hover{
  color:rgb(112, 112, 112);
  }
`