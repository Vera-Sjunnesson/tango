import React from 'react'
import styled from 'styled-components/macro';

export const Box = styled.div`
  height: 20px;
  width: 20px;
`

export const Description = styled.p`
  font-weight: 700;
  color: #222222;
  }
`

export const ListDescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 10px;
`

export const DescriptionCard = styled.div`
  display: flex;
  align-items: center;
`

export const ListDescriptionElement = ({ color, description }) => {
  return (
    <DescriptionCard>
      <Box style={{ background: `${color}` }} />
      <Description>&nbsp;&nbsp;=&nbsp;&nbsp;{description}</Description>
    </DescriptionCard>
  )
}

export const ListDescription = () => {
  return (
    <ListDescriptionContainer>
      <ListDescriptionElement color="#e88025" description="Milonga" />
      <ListDescriptionElement color="#518a93" description="Practica" />
      <ListDescriptionElement color="#edc343" description="Class" />
      <ListDescriptionElement color="#fef0c8" description="Festival" />
    </ListDescriptionContainer>
  )
}