import React from 'react';
import { BackgroundContainer } from 'components/lib/ContainerStyles';
import styled from 'styled-components/macro';
import { BackgroundLine } from 'components/lib/BackgroundLine';

export const FeaturedTextCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 30%;
  left: 80%;
  transform: translate(-70%, -20%);
`

export const FeaturedTextSpan = styled.span`
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background: #000000d6;
  padding: 2px 10px;
`

export const FeaturedText = styled.p`
  width: 500px;
  margin-bottom: 20px;
  color: #e78431;
  font-weight: 500;
  background: #000000d6;
  padding: 10px 10px;
`

export const AboutH1 = styled.h1`
  margin-bottom: 20px;
  color: #e78431;
  font-weight: 700;
`

export const About = ({ aboutRef }) => {
  return (
    <BackgroundContainer ref={aboutRef} $img={`${process.env.PUBLIC_URL}/images/S01_5746_d.jpg`} id="#sectionTwo">
      <BackgroundLine backgroundimg={`${process.env.PUBLIC_URL}/assets/line04-02-02.svg`} />
      <FeaturedTextCard>
        <AboutH1>
          <FeaturedTextSpan>
            OM TANGO NORTE
          </FeaturedTextSpan>
        </AboutH1>
        <FeaturedText>
          {/* eslint-disable-next-line max-len */}
          Svensk-Argentinska Tangoföreningen är en ideell förening som verkar för spridandet av tangokulturen. Tonvikten ligger på dans, men också andra delar av kulturen ligger oss varmt om hjärtat. Föreningen bildades 1988 och använder ofta kortnamnet Tango Norte. All verksamhet bygger på ideellt arbete från medlemmarna.
          <br />
          <br />
          {/* eslint-disable-next-line max-len */}
          Under höst, vinter och vår har vi flera regelbundna aktiviteter varje vecka och om somrarna ordnar vi tangotillställningar i det fria. Sedan tjugo år arrangerar vi en tangofestival kring nyår med internationella artister: musiker, dansare (lärare) och DJ:s. Dessutom ordnar vi gästlärarbesök och andra aktiviteter då och då under året. Alla evenemang hittar du i kalendariet.
        </FeaturedText>
      </FeaturedTextCard>
    </BackgroundContainer>
  );
}
