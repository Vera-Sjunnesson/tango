import React from 'react'
import styled from 'styled-components';

export const Box = styled.div`
  height: 25px;
  width: 25px;
  position: relative;
  border: ${(props) => (props.$symbol ? '1px solid var(--secondary-color)' : '')};
  margin: ${(props) => (props.$symbol ? '0px 10px 0px 0px' : '')};

  @media (min-width: 744px) and (max-width: 1279px) {
  }

  @media (min-width: 1280px) {
  }
`

export const BoxLetter = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  padding: 0px 0px 1px 0px;
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
  row-gap: 15px;

  @media (min-width: 744px) and (max-width: 1279px) {
    row-gap: 10px;
  }

  @media (min-width: 1280px) {
    row-gap: 10px;
  }
`

export const DescriptionCard = styled.div`
  display: flex;
  align-items: center;
`

export const ListDescriptionElement = ({ color, description, text, border }) => {
  return (
    <DescriptionCard>
      <Box $symbol={border} style={{ background: `${color}` }}>
        <BoxLetter>
          {text}
        </BoxLetter>
      </Box>
      <Description>&nbsp;&nbsp;=&nbsp;&nbsp;{description}</Description>
    </DescriptionCard>
  )
}

export const ListSymbol = ({ color, text }) => {
  return (
    <Box $symbol style={{ background: `${color}` }}>
      <BoxLetter>
        {text}
      </BoxLetter>
    </Box>
  )
}

export const ListDescription = () => {
  return (
    <ListDescriptionContainer>
      <ListDescriptionElement color="#ef9d4d" description="Milonga" text="M" />
      <ListDescriptionElement color="#edc343" description="Praktika" text="P" />
      <ListDescriptionElement color="#80b3bb" description="Klass" text="K" />
      <ListDescriptionElement color="#eea484" description="Festival" text="F" />
      <ListDescriptionElement color="#fef0c8" description="Annat" text="A" />
    </ListDescriptionContainer>
  )
}