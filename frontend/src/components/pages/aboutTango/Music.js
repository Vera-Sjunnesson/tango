import React from 'react';
import styled from 'styled-components/macro';
import { Header } from 'components/lib/Header';
import { BackgroundContainer2 } from 'components/lib/ContainerStyles';
import { GoBackButton } from 'components/lib/Buttons';
import music from '../../../data/music.json'
import modernTango from '../../../data/modern-tango.json'
import { ListHeaderSmall } from './styles_about_tango/AboutTangoStyles';

export const StyledList = styled.ol`
  display: flex;
  flex-direction: column;
  margin: 0px;
  align-items: center;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: auto;
    align-items: flex-start;
    margin: 60px 0px;
  }

  @media (min-width: 1280px) {
    align-items: flex-start;
    width: auto;
    margin: 60px 0px;
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
  font-size: 20px;
  text-align: center;

  @media (min-width: 744px) and (max-width: 1280px) {
    text-align: left;
    font-size: 30px;
  }

  @media (min-width: 1280px) {
    margin-top: 40px;
    text-align: left;
    font-size: 30px;
  }
`

export const Music = () => {
  return (
    <>
      <GoBackButton />
      <Header isSmall />
      <BackgroundContainer2 $img={`${process.env.PUBLIC_URL}/images/R00_5735_d.jpg`} $img2={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`}>
        <ListHeaderSmall>TANGOMUSIK</ListHeaderSmall>
        <StyledList>
          <StyledListHeading>
            <span className="header-span">
              Om tango:
            </span>
          </StyledListHeading>
          <StyledlistItem>
            <a
              href="https://www.tangonorte.com/page.php?id=Tangonsmusikaliskahistoria"
              target="_blank"
              rel="noreferrer">
              <StyledParagraphBold>
                <span className="list-span">
                  Tangons musikaliska historia
                </span>
              </StyledParagraphBold>
            </a>
          </StyledlistItem>
          <StyledListHeading>
            <span className="header-span">
              Tango i den klassiska traditionen:
            </span>
          </StyledListHeading>
          {music.map((musicItem) => {
            return (
              <StyledlistItem key={musicItem.name}>
                <a
                  href={musicItem.href}
                  target="_blank"
                  rel="noreferrer">
                  <StyledParagraphBold>
                    <span className="list-span">
                      {musicItem.name}
                    </span>
                  </StyledParagraphBold>
                </a>
              </StyledlistItem>
            );
          })}
          <StyledListHeading>
            <span className="header-span">
              Modern Tango & Tango Fusion:
            </span>
          </StyledListHeading>
          {modernTango.map((modernTangoItem) => {
            return (
              <StyledlistItem key={modernTangoItem.name}>
                <a
                  href={modernTangoItem.href}
                  target="_blank"
                  rel="noreferrer">
                  <StyledParagraphBold>
                    <span className="list-span">
                      {modernTangoItem.name}
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