import React from 'react';
import { StyledWrapper, BackgroundContainer } from 'components/lib/ContainerStyles';
import styled from 'styled-components/macro';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import { Header } from 'components/lib/Header';

export const StyledTextCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 523px;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    top: 30%;
    left: 80%;
    transform: translate(-70%, -20%);
    align-items: flex-start;
    width: auto;
  }

  @media (min-width: 1280px) {
    top: 30%;
    left: 80%;
    transform: translate(-70%, -20%);
    width: auto;
    align-items: flex-start;
  }
`

export const StyledH1 = styled.h1`
  margin-bottom: 20px;
  color: #e78431;
  font-weight: 500;
  font-size: 2rem;
  
    @media (min-width: 744px) and (max-width: 1280px) {
      font-size: 52px;
    }

    @media (min-width: 1280px) {
      font-size: 52px;
    }
`

export const StyledTextSpan = styled.span`
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background: #000000d6;
  padding: 2px 10px;
`

export const StyledParagraph = styled.p`
  margin-bottom: 10px;
  color: white;
  font-weight: 300;
  background: #000000d6;
  padding: 20px;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 500px;
    padding: 10px 10px;
  }

  @media (min-width: 1280px) {
    width: 500px;
    padding: 10px 10px;
  }
`

export const About = () => {
  return (
    <StyledWrapper>
      <Header isSmall />
      <BackgroundContainer style={{ width: '100%' }} $img={`${process.env.PUBLIC_URL}/images/S01_5746_d.jpg`} id="#sectionTwo">
        <BackgroundLine backgroundimg={`${process.env.PUBLIC_URL}/assets/line04-02-02.svg`} />
        <StyledTextCard>
          <StyledH1>
            <StyledTextSpan>
              OM TANGO NORTE
            </StyledTextSpan>
          </StyledH1>
          <StyledParagraph>
            {/* eslint-disable-next-line max-len */}
            Svensk-Argentinska Tangoföreningen är en ideell förening som verkar för spridandet av tangokulturen. Tonvikten ligger på dans, men också andra delar av kulturen ligger oss varmt om hjärtat. Föreningen bildades 1988 och använder ofta kortnamnet Tango Norte. All verksamhet bygger på ideellt arbete från medlemmarna.
            <br />
            <br />
            {/* eslint-disable-next-line max-len */}
            Under höst, vinter och vår har vi flera regelbundna aktiviteter varje vecka och om somrarna ordnar vi tangotillställningar i det fria. Sedan tjugo år arrangerar vi en tangofestival kring nyår med internationella artister: musiker, dansare (lärare) och DJ:s. Dessutom ordnar vi gästlärarbesök och andra aktiviteter då och då under året. Alla evenemang hittar du i kalendariet.
          </StyledParagraph>
        </StyledTextCard>
      </BackgroundContainer>
    </StyledWrapper>
  )
}
