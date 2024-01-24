import React from 'react';
import styled from 'styled-components';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import { Header } from 'components/lib/Header';
import { GoBackButtonResponsive } from 'components/lib/Buttons';
import music from '../../../data/music.json'
import modernTango from '../../../data/modern-tango.json'
import { ListHeader, BackgroundContainer3, StyledListSection, StyledList3 } from './styles_about_tango/AboutTangoStyles';

export const StyledlistItem = styled.li`
  display: flex;
  margin: 15px 0;

  @media (min-width: 744px) and (max-width: 1279px) {
    margin: 20px 0px;
  }

  @media (min-width: 1280px) {
    margin: 20px 0px;
  }
`

export const StyledParagraphBold = styled.p`
  font-weight: 900;
  color: var(--secondary-color);
  text-align: center;
  margin-right: 20px;

  @media (min-width: 744px) and (max-width: 1279px) {
    text-align: left;
  }

  @media (min-width: 1280px) {
    text-align: left;
  }

  .launch-icon {
    color: var(--secondary-color);
    padding: 0px 0px 0px 10px;
    font-size: 25px;
  }

  &:hover .launch-icon {
    color: var(--primary-color);
  }
`

export const StyledListHeading = styled.h4`
  color: var(--primary-color);
  font-size: 20px;
  text-align: center;
  margin: 30px 0px 20px 0px;

  @media (min-width: 744px) and (max-width: 1279px) {
    text-align: left;
    font-size: 30px;
  }

  @media (min-width: 1280px) {
    text-align: left;
    font-size: 30px;
  }
`

export const ListHeaderSmall = styled(ListHeader)`
  font-size: 3rem;
  padding: 5px 10px 10px 10px;
  color: var(--secondary-color);
  line-height: 3rem;
  
  @media (min-width: 744px) and (max-width: 1279px) {
    font-size: 80px;
    line-height: 80px;
  }

  @media (min-width: 1280px) {
    font-size: 80px;
    line-height: 80px;
  }
`

export const Music = () => {
  return (
    <>
      <GoBackButtonResponsive />
      <Header isSmall />
      <BackgroundContainer3 $img={`${process.env.PUBLIC_URL}/images/S02_4543_c_d.jpg`}>
        <StyledListSection $interview>
          <ListHeaderSmall>TANGOMUSIK</ListHeaderSmall>
          <StyledList3>
            <StyledlistItem>
              <a
                href="https://www.tangonorte.com/page.php?id=Tangonsmusikaliskahistoria"
                target="_blank"
                rel="noreferrer">
                <StyledParagraphBold>
                  <span className="list-span">
                    Musikalisk historia
                    <LaunchOutlinedIcon className="launch-icon" />
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
                        <LaunchOutlinedIcon className="launch-icon" />
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
                        <LaunchOutlinedIcon className="launch-icon" />
                      </span>
                    </StyledParagraphBold>
                  </a>
                </StyledlistItem>
              );
            })}
          </StyledList3>
        </StyledListSection>
      </BackgroundContainer3>
    </>
  )
}