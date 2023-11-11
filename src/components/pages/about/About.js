import React from 'react';
import { BackgroundContainer, BackgroundContainer2 } from 'components/lib/ContainerStyles';
import styled from 'styled-components/macro';
import { BackgroundLine, BackgroundLine2 } from 'components/lib/BackgroundLine';
/* import { NavBarDark } from 'components/lib/NavBar'; */
import { useMediaQuery } from 'react-responsive'

export const FeaturedTextCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 274px;
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

export const TextCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  top: 400px;
  width: 100%;
`

export const MobileContainer = styled.div`
  height: 140vh;
  position: relative;
  top: 193px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FeaturedTextSpan = styled.span`
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background: #000000d6;
  padding: 2px 10px;
`

export const FeaturedText = styled.p`
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

export const AboutH1 = styled.h1`
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

export const ReadMoreA = styled.a`
  text-decoration: none;
  background: #000000d6;
  color: white;
  padding: 10px 20px;
  font-weight: 500;
  z-index: 1001;
  align-self: flex-start;
  margin-right: 5px;
  margin-top: 0px;

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    margin-right: 0px;
    margin-top: 0px;
  }
`

export const About = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  return (
    <div>
      {isDesktop ? (
        <BackgroundContainer style={{ width: '100%' }} $img={`${process.env.PUBLIC_URL}/images/S01_5746_d.jpg`} id="#sectionTwo">
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
            <ReadMoreA
              href="https://www.tangonorte.com/events.php?nid=8681"
              target="_blank"
              aria-label="linkedin"
              rel="noreferrer">
                LÄS MER
            </ReadMoreA>
          </FeaturedTextCard>
        </BackgroundContainer>
      ) : (
        <MobileContainer>
          <BackgroundContainer2 $img={`${process.env.PUBLIC_URL}/images/S01_5746_d.jpg`} />
          <BackgroundLine2 backgroundimg={`${process.env.PUBLIC_URL}/assets/line04-02-03.svg`} />
          <FeaturedTextCard>
            <AboutH1>
              <FeaturedTextSpan>
                OM TANGO NORTE
              </FeaturedTextSpan>
            </AboutH1>
          </FeaturedTextCard>
          <TextCard>
            <FeaturedText>
              {/* eslint-disable-next-line max-len */}
              Svensk-Argentinska Tangoföreningen är en ideell förening som verkar för spridandet av tangokulturen. Tonvikten ligger på dans, men också andra delar av kulturen ligger oss varmt om hjärtat. Föreningen bildades 1988 och använder ofta kortnamnet Tango Norte. All verksamhet bygger på ideellt arbete från medlemmarna.
              <br />
              <br />
              {/* eslint-disable-next-line max-len */}
              Under höst, vinter och vår har vi flera regelbundna aktiviteter varje vecka och om somrarna ordnar vi tangotillställningar i det fria. Sedan tjugo år arrangerar vi en tangofestival kring nyår med internationella artister: musiker, dansare (lärare) och DJ:s. Dessutom ordnar vi gästlärarbesök och andra aktiviteter då och då under året. Alla evenemang hittar du i kalendariet.
            </FeaturedText>
            <ReadMoreA
              href="https://www.tangonorte.com/events.php?nid=8681"
              target="_blank"
              aria-label="linkedin"
              rel="noreferrer">
              LÄS MER
            </ReadMoreA>
          </TextCard>
        </MobileContainer>
      )}
    </div>
  )
}
