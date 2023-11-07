import React from 'react'
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

export const NavBarContainer = styled.span`
  background: #ffffff;
  width: 100%;
  height: 46px;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 999;
  border-bottom: solid 0.5px #222322c4; 
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  gap: 103px;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 999;
  text-align: center;
  width: 100%;
`

export const LogInWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  z-index: 999;
  text-align: center;
`

export const LogInContainer = styled.div`
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
  const navLinkStyle = {
    fontWeight: '700',
    color: '#222322c4',
    textDecoration: 'none',
    margin: '0',
    padding: '0',
    textAlign: 'center'
  }

  const linkStyle = {
    fontWeight: '700',
    color: '#222322c4',
    textDecoration: 'none',
    margin: '0',
    textAlign: 'center',
    border: '1px solid #222322c4',
    padding: '14px 10px',
    background: 'white'
  }

  return (
    <NavBarWrapper>
      <NavBarContainer>
        <NavWrapper>
          <NavLink
            to="/"
            style={navLinkStyle}>
              HEM
          </NavLink>
          <NavLink
            to="/om"
            style={navLinkStyle}>
              OM OSS
          </NavLink>
          <a
            href="https://www.tangonorte.com/register.php"
            target="_blank"
            rel="noreferrer"
            style={navLinkStyle}>
              BLI MEDLEM
          </a>
          <a
            href="https://www.tangonorte.com/page.php?id=main"
            target="_blank"
            aria-label="linkedin"
            rel="noreferrer"
            style={linkStyle}>
              LOGGA IN
          </a>
        </NavWrapper>
      </NavBarContainer>
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