import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'
import { Header } from 'components/lib/Header';
import { GoBackButtonResponsive } from 'components/lib/Buttons';
import glossary from '../../../data/glossary.json'
import { ListHeaderSmall, SideImage, BackgroundContainer2, StyledListSection, StyledList } from './styles_about_tango/AboutTangoStyles';

export const StyledlistItem = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 0;
  width: 100%;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 100%;
    align-items: center;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 0px;
    margin: 10px 0;
  }
`

export const StyledlistItemDetails = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
  flex-direction: row;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 100%;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
`

export const StyledParagraph = styled.p`
  font-weight: 400;
  width: 50%;
  word-break: break-word;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 50%;
  }

  @media (min-width: 1280px) {
    width: 323px;
  }
`

export const StyledParagraphBold = styled.p`
  font-weight: 900;
  color: var(--secondary-color);
  width: 40%;
  text-align: right;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 45%;
  }

  @media (min-width: 1280px) {
    width: 230px;
  }
`

export const Glossary = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  return (
    <>
      <GoBackButtonResponsive />
      <Header isSmall />
      <BackgroundContainer2 $img={`${process.env.PUBLIC_URL}/images/R00_5735_d.jpg`} $img2={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`}>
        {isDesktop && (
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <SideImage $heightsize="600px" src={`${process.env.PUBLIC_URL}/images/R00_5735_d.jpg`} alt="Närbild omfamning" />
            <SideImage $heightsize="600px" src={`${process.env.PUBLIC_URL}/images/A100_1717_bw_d.jpg`} alt="Vidbild milonga" />
            <SideImage $heightsize="1253px" src={`${process.env.PUBLIC_URL}/images/A100_2331_bw_d.jpg`} alt="Tangopar som dansar" />
            <SideImage $heightsize="1344px" src={`${process.env.PUBLIC_URL}/images/Z128_2840_bw_d.jpg`} alt="Tangopar som dansar" />
            <SideImage $heightsize="600px" src={`${process.env.PUBLIC_URL}/images/A100_2120_bw_d.jpg`} alt="Vidbild milonga" />
            <SideImage $heightsize="600px" src={`${process.env.PUBLIC_URL}/images/X102_0249_bw_d.jpg`} alt="Närbild omfamning, en kvinnas ansikte" />
            <SideImage $heightsize="1100px" src={`${process.env.PUBLIC_URL}/images/113_06_d_d.jpg`} alt="Tangouppvisning" />
            <SideImage $heightsize="700px" src={`${process.env.PUBLIC_URL}/images/153_5384_bw_d.jpg`} alt="Man som sjunger och spelar dragspel" />
          </span>
        )}
        <StyledListSection>
          <ListHeaderSmall>TANGOORDLISTA</ListHeaderSmall>
          <StyledList>
            {glossary.map((glossaryItem) => {
              return (
                <StyledlistItem key={glossaryItem.id}>
                  <StyledlistItemDetails>
                    <StyledParagraphBold>
                      <span className="list-span-glossary">
                        {glossaryItem.name}
                      </span>
                    </StyledParagraphBold>
                    <StyledParagraph>
                      <span className="list-span-glossary">
                        {glossaryItem.meaning}
                      </span>
                    </StyledParagraph>
                  </StyledlistItemDetails>
                  {!isDesktop && glossaryItem.image !== '' && (
                    <SideImage $small $heightsize={glossaryItem.height} src={`${process.env.PUBLIC_URL}/images/${glossaryItem.image}`} alt={glossaryItem.alt} />
                  )}
                </StyledlistItem>
              );
            })}
          </StyledList>
        </StyledListSection>
      </BackgroundContainer2>
    </>
  )
}