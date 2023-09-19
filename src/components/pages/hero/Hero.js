import React from 'react';
import { Header } from 'components/lib/Header';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import styled from 'styled-components/macro';
import { FeaturedCarousel } from './FeaturedCarousel';
import { Menu } from './Menu';

export const HeroContainer = styled.div`
  height: 105vh;
  width: 100%;
  position: relative;
`
export const HeroContent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`

export const Hero = ({ heroRef }) => {
  return (
    <HeroContainer ref={heroRef} id="#sectionOne">
      <BackgroundLine backgroundimg={`${process.env.PUBLIC_URL}/assets/line01new.svg`} />
      <HeroContent>
        <Header />
        <FeaturedCarousel />
        <Menu />
      </HeroContent>
    </HeroContainer>
  );
}
