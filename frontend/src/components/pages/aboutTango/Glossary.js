import React from 'react';
import styled from 'styled-components/macro';
import { Header } from 'components/lib/Header';
import { BackgroundContainer2 } from 'components/lib/ContainerStyles';
import { GoBackButton } from 'components/lib/Buttons';
import glossary from '../../../data/glossary.json'
import { ListHeaderSmall } from './styles_about_tango/AboutTangoStyles';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  align-items: center;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: auto;
  }

  @media (min-width: 1280px) {
    align-items: flex-start;
    width: 100%;
  }
`

export const StyledlistItem = styled.li`
  display: flex;
  margin: 20px 0;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: auto;
  }

  @media (min-width: 1280px) {
    width: auto;
  }
`

export const StyledParagraph = styled.p`
  font-weight: 400;
  width: 45%;
  word-break: break-word;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 400px;
  }

  @media (min-width: 1280px) {
    width: 400px;
  }
`

export const StyledParagraphBold = styled.p`
  font-weight: 900;
  color: var(--primary-orange);
  width: 45%;
  text-align: right;
  margin-right: 20px;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 250px;
  }

  @media (min-width: 1280px) {
    width: 230px;
  }
`

export const Glossary = () => {
  return (
    <>
      <GoBackButton />
      <Header isSmall />
      <BackgroundContainer2 $img={`${process.env.PUBLIC_URL}/images/R00_5735_d.jpg`} $img2={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`}>
        <ListHeaderSmall>TANGOORDLISTA</ListHeaderSmall>
        <StyledList>
          {glossary.map((glossaryItem) => {
            return (
              <StyledlistItem key={glossaryItem.name}>
                <StyledParagraphBold>
                  <span className="list-span">
                    {glossaryItem.name}
                  </span>
                </StyledParagraphBold>
                <StyledParagraph>
                  <span className="list-span">
                    {glossaryItem.meaning}
                  </span>
                </StyledParagraph>
              </StyledlistItem>
            );
          })}
        </StyledList>
      </BackgroundContainer2>
    </>
  )
}