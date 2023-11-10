import React from 'react';
import { Header } from 'components/lib/Header';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import styled from 'styled-components/macro';
import { useMediaQuery } from 'react-responsive'
import { FeaturedCarousel } from './FeaturedCarousel';
import { Menu } from './Menu';

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120vh;

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    height: 100vh;
    display: block;
  }

`
export const HeroContent = styled.div`
  position: absolute;
  top: 193px;
  left: 0px;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    top: 0px;
  }

  @media (min-width: 1280px) {
    top: 0px;
  }
`

export const Hero = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  return (
    <HeroContainer>
      <BackgroundLine backgroundimg={`${process.env.PUBLIC_URL}/assets/vector1.svg`} />
      <HeroContent>
        {isDesktop && (
          <Header />
        )}
        <FeaturedCarousel />
        <Menu />
      </HeroContent>
    </HeroContainer>
  );
}
