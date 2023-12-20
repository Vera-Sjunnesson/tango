import React from 'react';
import styled from 'styled-components/macro';
import { Header } from 'components/lib/Header';
import { BackgroundContainer2 } from 'components/lib/ContainerStyles';
import glossary from '../../../data/glossary.json'

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`

export const StyledlistItem = styled.li`
  display: flex;
  margin: 20px 0;
`

export const StyledParagraph = styled.p`
  font-weight: 500;
  width: 500px;
`

export const StyledParagraphBold = styled.p`
  font-weight: 700;
  color: #222222;
  width: 250px;
  display: inline-block;
  text-align: right;
  margin-right: 20px;
`

export const Glossary = () => {
  return (
    <>
      <Header isSmall />
      <BackgroundContainer2 $img={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`}>
        <StyledList>
          {glossary.map((glossaryItem) => {
            return (
              <StyledlistItem>
                <StyledParagraphBold>
                  {glossaryItem.name}
                </StyledParagraphBold>
                <StyledParagraph>
                  {glossaryItem.meaning}
                </StyledParagraph>
              </StyledlistItem>
            );
          })}
        </StyledList>
      </BackgroundContainer2>
    </>
  )
}