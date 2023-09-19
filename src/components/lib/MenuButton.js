import React from 'react'
import styled from 'styled-components/macro';
import { Link } from 'react-scroll';

export const MenuButtonContainer = styled.button`
  background-size: cover;
  background-position: top;
  height: 129px;
  width: 100%;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
  color: var(--primary-color);
  font-size: 25px;
  font-weight: 500;
  line-height: 22px; /* 68.75% */
  letter-spacing: -0.408px;
`
export const MenuButton = ({ color, img, buttonText, to }) => {
  const navLinkStyle = {
    fontWeight: '300',
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <MenuButtonContainer type="button" style={{ backgroundImage: `linear-gradient(${color}, ${color}), url(${img})` }}>
      <Link to={`${to}`} spy smooth style={navLinkStyle}>{buttonText}</Link>
    </MenuButtonContainer>
  )
}