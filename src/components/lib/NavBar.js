import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro';
import { Link } from 'react-scroll';

export const NavBarWrapper = styled.div`
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  z-index: 1001;
`

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 103px;
  width: 617px;
  max-width: 1091px;
  height: 40px;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 999;
  text-align: center;
`

export const LogInContainer = styled.nav`
  height: 40px;
  width: 106px;
  position: fixed;
  top: 0px;
  right: 0;
  z-index: 999;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavBar = () => {
  const [navBarTransparent, setNavBarTransparent] = useState(false);

  const navLinkStyle = {
    fontWeight: '700',
    color: navBarTransparent ? 'white' : '#222322',
    textDecoration: 'none',
    margin: '0',
    padding: '0',
    textAlign: 'center'
  }

  const linkStyle = {
    fontWeight: '800',
    color: navBarTransparent ? 'white' : '#222322',
    textDecoration: 'none',
    margin: '0',
    padding: '0',
    textAlign: 'center'
  }

  const NavBarWhite = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 161) {
      setNavBarTransparent(true)
    } else if (scrolled <= 161) {
      setNavBarTransparent(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', NavBarWhite);

    return () => {
      window.removeEventListener('scroll', NavBarWhite);
    };
  }, [])

  return (
    <NavBarWrapper style={{ background: navBarTransparent ? '#000000d6' : 'transparent' }}>
      <NavBarContainer>
        <Link to="#sectionOne" spy smooth href="/#sectionOne" style={navLinkStyle}>HEM</Link>
        <Link to="#sectionTwo" spy smooth href="/#sectionTwo" style={navLinkStyle}>OM OSS</Link>
        <Link to="#sectionThree" spy smooth href="/#sectionThree" style={navLinkStyle}>BLI MEDLEM</Link>
        <Link to="#sectionFour" spy smooth href="/#sectionFour" style={navLinkStyle}>OM TANGO</Link>
      </NavBarContainer>
      <LogInContainer>
        <Link to="#sectionFour" spy smooth href="/#sectionFour" style={linkStyle}>LOGGA IN</Link>
      </LogInContainer>
    </NavBarWrapper>
  )
}