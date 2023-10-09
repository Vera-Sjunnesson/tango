import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const NavBarWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1001;
`

export const NavBarWrapper2 = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1001;
  background: #000000d6;
  height: 41px;
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

export const LogoContainer = styled.div`
  height: 40px;
  width: 180px;
  position: fixed;
  top: 0px;
  left: 10px;
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
        <NavLink to="/" style={navLinkStyle}>HEM</NavLink>
        <NavLink to="/om" style={navLinkStyle}>OM OSS</NavLink>
        <a
          href="https://www.tangonorte.com/register.php"
          target="_blank"
          rel="noreferrer"
          style={navLinkStyle}>
            BLI MEDLEM
        </a>
        <a
          href="https://www.tangonorte.com/page.php?id=*"
          target="_blank"
          rel="noreferrer"
          style={navLinkStyle}>
            OM TANGO
        </a>
      </NavBarContainer>
      <LogInContainer>
        <a
          href="https://www.tangonorte.com/page.php?id=main"
          target="_blank"
          aria-label="linkedin"
          rel="noreferrer"
          style={linkStyle}>
            LOGGA IN
        </a>
      </LogInContainer>
      {navBarTransparent && (
        <LogoContainer>
          <img src={`${process.env.PUBLIC_URL}/assets/norte-logo-new-02.svg`} alt="logo" />
        </LogoContainer>
      )}
    </NavBarWrapper>
  )
}

export const NavBarDark = () => {
  const navLinkStyle = {
    fontWeight: '700',
    color: 'white',
    textDecoration: 'none',
    margin: '0',
    padding: '0',
    textAlign: 'center'
  }

  const linkStyle = {
    fontWeight: '800',
    color: 'white',
    textDecoration: 'none',
    margin: '0',
    padding: '0',
    textAlign: 'center'
  }

  return (
    <NavBarWrapper2>
      <NavBarContainer>
        <NavLink to="/" style={navLinkStyle}>HEM</NavLink>
        <NavLink to="/om" style={navLinkStyle}>OM OSS</NavLink>
        <a
          href="https://www.tangonorte.com/register.php"
          target="_blank"
          rel="noreferrer"
          style={navLinkStyle}>
            BLI MEDLEM
        </a>
        <a
          href="https://www.tangonorte.com/page.php?id=*"
          target="_blank"
          rel="noreferrer"
          style={navLinkStyle}>
            OM TANGO
        </a>
      </NavBarContainer>
      <LogInContainer>
        <a
          href="https://www.tangonorte.com/page.php?id=main"
          target="_blank"
          aria-label="linkedin"
          rel="noreferrer"
          style={linkStyle}>
            LOGGA IN
        </a>
      </LogInContainer>
      <NavLink
        to="/">
        <LogoContainer>
          <img src={`${process.env.PUBLIC_URL}/assets/norte-logo-new-02.svg`} alt="logo" />
        </LogoContainer>
      </NavLink>
    </NavBarWrapper2>
  )
}