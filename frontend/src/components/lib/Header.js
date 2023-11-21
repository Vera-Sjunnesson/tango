import React from 'react'
import styled from 'styled-components/macro';
import { useMediaQuery } from 'react-responsive'
import { NavLink } from 'react-router-dom';
import { HamburgerMenu } from './HamburgerMenu';
import { NavBar } from './NavBar';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: unset;
  z-index: 999;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 144px;
    position: unset;
    display: flex;
    justify-content: space-between;
    z-index: 999;
    width: 100%;
    z-index: 999;
    position: relative;
  }

  @media (min-width: 1280px) {
    position: unset;
    height: ${(props) => (props.$Small ? '104px' : '161px')};
    width: auto;
  }
`

export const Logo = styled.img`
  height: 124px;
  margin: 0;
  z-index: 1001;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: ${(props) => (props.$Small ? '124px' : '163px')};
    position: absolute;
    top: 9px;
  }

  @media (min-width: 1280px) {
    height: ${(props) => (props.$Small ? '100px' : '142px')};
    top: ${(props) => (props.$Small ? '5px' : '1px')};
    position: absolute;
    left: ${(props) => (props.$Small ? '7px' : '0px')};
`

export const Header = ({ isBlack, isSmall, isLarge, isHero }) => {
  const navLinkStyle = {
    zIndex: '1001'
  }

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1280px)' })
  return (
    <HeaderContainer $Small={isSmall}>
      {isMobileOrTablet ? (
        <HamburgerMenu />
      ) : (
        <NavBar isLarge={isLarge} isHero={isHero} />
      )}
      <NavLink
        to="/"
        style={navLinkStyle}>
        <Logo
          $Small={isSmall}
          src={isBlack ? `${process.env.PUBLIC_URL}/assets/tn-logo-black.svg` : `${process.env.PUBLIC_URL}/assets/tn-logo-plain.svg`}
          alt="Tango Norte Logo" />
      </NavLink>
    </HeaderContainer>
  )
}