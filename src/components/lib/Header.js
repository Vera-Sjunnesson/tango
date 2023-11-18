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
/*   box-shadow: 7px 7px 19px 0px rgba(0,0,0,0.50); */

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 144px;
    position: unset;
    display: flex;
    justify-content: space-between;
    z-index: 999;
    width: 100%;
    box-shadow: 7px 7px 19px 0px rgba(0,0,0,0.50);
    z-index: 999;
    position: relative;
  }

  @media (min-width: 1280px) {
    position: unset;
    height: 161px;
    width: auto;
    flex-direction: row;
  }
`

export const Logo = styled.img`
  height: 124px;
  margin: 0;
  z-index: 1001;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 163px;
    position: absolute;
    left: -11px;
    top: 9px;
  }

  @media (min-width: 1280px) and (max-width: 1512px) {
    height: 117px;
    top: -13px;
    position: fixed;
    left: -11px;
  }

  @media (min-width: 1512px) {
    height: 160px;
    top: -13px;
    position: fixed;
    left: -11px;
  }
`

export const Header = () => {
  const navLinkStyle = {
    zIndex: '1001'
  }

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1280px)' })
  return (
    <HeaderContainer>
      {isMobileOrTablet ? (
        <HamburgerMenu />
      ) : (
        <NavBar />
      )}
      <NavLink
        to="/"
        style={navLinkStyle}>
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/norte-logo.png`}
          alt="Tango Norte Logo" />
      </NavLink>
    </HeaderContainer>
  )
}