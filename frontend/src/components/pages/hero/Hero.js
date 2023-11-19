import React from 'react';
import { Header } from 'components/lib/Header';
/* import { BackgroundLine } from 'components/lib/BackgroundLine'; */
import styled from 'styled-components/macro';
import { LineAnimation } from 'components/lib/LineAnimation';
import { FeaturedCarousel } from './FeaturedCarousel';
import { Menu } from './Menu';

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FDF0E5;
  height: 1154px;
  overflow-x: hidden;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 1617px; 
    overflow-x: hidden;
  }

  @media (min-width: 1280px) {
    height: 100vh;
    display: block;
  }

`
export const HeroContent = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;


  @media (min-width: 744px) and (max-width: 1280px) {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    background: #FDF0E5;
  }

  @media (min-width: 1280px) {
    top: 0px;
  }
`

export const Hero = () => {
  return (
    <HeroContainer>
      <LineAnimation />
      <HeroContent>
        <Header isLarge />
        <FeaturedCarousel />
        <Menu />
      </HeroContent>
    </HeroContainer>
  );
}
