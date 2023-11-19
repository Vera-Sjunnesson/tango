import React from 'react'
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const NavBarContainer = styled.div`
  width: 100%;  
  position: fixed;
  z-index: 1001;
  width: 100%;
  height: 34px;
  right: 10px;
  top: 5px;
  z-index: 999;
`

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 34px;
  gap: ${(props) => (props.$large ? '111px' : '68px')};
  z-index: 999;
  text-align: center;
  width: 100%;
`

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  display: inline-block;
  font-weight: 900;
  color: #222222;
  text-decoration: none;
  margin: 0;
  padding: 0 0 5px 0px;
  text-align: center;
  font-family: 'Barlow Semi Condensed', sans-serif;
  letter-spacing: 0.2rem;
  font-size: ${(props) => (props.$large ? '40px' : '30px')};

  &::before {
    content: "";
    width: 0;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #222222;
    transition: width .7s ease-in-out;
  }

  &.hovered::before {
    width: 100%;
  }
`

export const NavBar = ({ isLarge }) => {
  const addHoverEffect = (e) => {
    e.currentTarget.classList.add('hovered');
  };

  const removeHoverEffect = (e) => {
    e.currentTarget.classList.remove('hovered');
  };

  return (
    <NavBarContainer>
      <NavWrapper $large={isLarge}>
        <NavLinkStyled $large={isLarge} to="/" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>HEM</NavLinkStyled>
        <NavLinkStyled $large={isLarge} to="/om" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>OM OSS</NavLinkStyled>
        <NavLinkStyled $large={isLarge} to="/om" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>BLI MEDLEM</NavLinkStyled>
        <NavLinkStyled $large={isLarge} to="/om" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>LOGGA IN</NavLinkStyled>
      </NavWrapper>
    </NavBarContainer>
  )
}