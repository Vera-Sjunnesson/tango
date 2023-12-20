import React from 'react';
import { StyledWrapper, BackgroundContainer } from 'components/lib/ContainerStyles';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import { Header } from 'components/lib/Header';
import { GoBackButton } from 'components/lib/Buttons';
import { StyledTextCard, StyledH1, StyledTextSpan, StyledParagraph } from './styles_about/AboutStyles';

export const About = () => {
  return (
    <StyledWrapper>
      <Header isSmall />
      <BackgroundContainer style={{ width: '100%' }} $img={`${process.env.PUBLIC_URL}/images/S01_5746_d.jpg`}>
        <GoBackButton />
        <BackgroundLine isCover backgroundimg={`${process.env.PUBLIC_URL}/assets/line04-02-02.svg`} />
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
