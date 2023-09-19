import React from 'react'
import styled from 'styled-components/macro';

export const LineContainer = styled.div`
  background-size: cover;
  background-position: top;
  height: 100%;
  width: 100%;
`

export const BackgroundLine = ({ backgroundimg }) => {
  return (
    <LineContainer style={{ backgroundImage: `url(${backgroundimg})` }} />
  )
}