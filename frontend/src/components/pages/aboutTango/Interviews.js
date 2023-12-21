import React from 'react';
import styled from 'styled-components/macro';
import { Header } from 'components/lib/Header';
import { BackgroundContainer2 } from 'components/lib/ContainerStyles';
import { GoBackButton } from 'components/lib/Buttons';
import interviews from '../../../data/interviews.json'
import { ListHeaderSmall } from './styles_about_tango/AboutTangoStyles';

export const StyledList = styled.ol`
  display: flex;
  flex-direction: column;
  margin: 0px;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: auto;
    align-items: flex-start;
    width: 30%;
    margin: 10px 0px;
    height: 60vh;
  }

  @media (min-width: 1280px) {
    align-items: center;
    width: 30%;
    margin: 60px 0px;
    height: 60vh;
  }
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
  font-weight: 900;
  color: var(--primary-orange);
  width: 259px;
  text-align: center;
  margin-right: 20px;

  @media (min-width: 744px) and (max-width: 1280px) {
    text-align: left;
  }

  @media (min-width: 1280px) {
    text-align: left;
  }
`

export const StyledListHeading = styled.h4`
  color: var(--primary-color);
  font-size: 30px;
  margin-top: 40px;
`

export const Interviews = () => {
  return (
    <>
      <GoBackButton />
      <Header isSmall />
      <BackgroundContainer2 $img={`${process.env.PUBLIC_URL}/images/R00_5735_d.jpg`} $img2={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`} $cover>
        <ListHeaderSmall>INTERVJUER</ListHeaderSmall>
        <StyledList>
          {interviews.map((interviewItem) => {
            return (
              <StyledlistItem key={interviewItem.name}>
                <a
                  href={interviewItem.href}
                  target="_blank"
                  rel="noreferrer">
                  <StyledParagraphBold>
                    <span className="list-span">
                      {interviewItem.name}
                    </span>
                  </StyledParagraphBold>
                </a>
              </StyledlistItem>
            );
          })}
        </StyledList>
      </BackgroundContainer2>
    </>
  )
}