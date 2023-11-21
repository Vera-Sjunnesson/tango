import React from 'react'
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const NavBarContainer = styled.div`
  width: 100%;  
  position: absolut;
  z-index: 1001;
  width: ${(props) => (props.$large ? '100%' : '80%')};
  height: 34px;
  right: 10px;
  top: 5px;
  z-index: 999;
`

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-content: ${(props) => (props.$large ? 'flex-end' : 'space-between')};
  height: 34px;
  gap: ${(props) => (props.$large ? '111px' : '0px')};
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
  font-size: ${(props) => (props.$large ? '40px' : '25px')};

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

  &.active::before {
    width: 100%;
  }
`

export const NavDivider = styled.span`
  align-self: center;
  background: #222222;
  content: " ";
  height: 20px;
  margin-bottom: 5px;
  /* opacity: .3; */
  width: 4px;
`

export const NavBar = ({ isLarge, isHero }) => {
  const addHoverEffect = (e) => {
    e.currentTarget.classList.add('hovered');
  };

  const removeHoverEffect = (e) => {
    e.currentTarget.classList.remove('hovered');
  };

  return (
    <NavBarContainer $large={isLarge}>
      <NavWrapper $large={isLarge}>
        {!isHero
          && (
            <>
              <NavLinkStyled $large={isLarge} to="/kalendarium" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>KALENDARIUM</NavLinkStyled>
              <NavLinkStyled $large={isLarge} to="/aktuellt" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>AKTUELLT</NavLinkStyled>
              <NavLinkStyled $large={isLarge} to="/om-tango" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>OM TANGO</NavLinkStyled>
              <NavDivider />
              <NavLinkStyled $large={isLarge} to="/" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>HEM</NavLinkStyled>
            </>
          )}
        <NavLinkStyled $large={isLarge} to="/om" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>OM OSS</NavLinkStyled>
        <NavLinkStyled $large={isLarge} to="/logga-in" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>BLI MEDLEM</NavLinkStyled>
        <NavLinkStyled $large={isLarge} to="/logga-in" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>LOGGA IN</NavLinkStyled>
      </NavWrapper>
    </NavBarContainer>
  )
}