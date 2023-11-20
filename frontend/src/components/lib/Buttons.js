import React from 'react'
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const ArrowNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  background: #000000d6;
  color: white;
  font-weight: 500;
  padding: ${(props) => (props.$small ? '10px' : '10px 20px')};
  z-index: 998;
  letter-spacing: 0.2rem;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
  margin-top: 10px;
  max-height: ${(props) => (props.$small ? '36px' : '')};
  width: fit-content;

    &:hover {
      color: #e27b5b;
      border-color: #e27b5b;
    }

    .arrow {
      width: 30px;
      transition: all 0.3s ease;
      border: 1px solid #fff;
      position: relative;
      background: #fff;
      right: -10px;
      border-radius: 70px;
    }
  
    &:hover .arrow {
      width: 50px;
    }
  }
`

export const Arrow = styled.span`
  display: ${(props) => (props.$small ? 'none' : 'flex')};
  cursor: pointer;
  align-items: center;
  transition: all 0.3s ease;
  justify-content: flex-start;

  @media (min-width: 744px) and (max-width: 1280px) {
    display: flex;
  }

  @media (min-width: 1280px) {
    display: flex;
`

export const ArrowHead = styled.img`
  width: 10px; 
`

export const ArrowButton = ({ isSmall, path }) => {
  return (
    <ArrowNavLink
      to={`/${path}`}
      $small={isSmall}>
      LÄS MER
      <Arrow $small={isSmall}>
        <span className="arrow" />
        <ArrowHead src={`${process.env.PUBLIC_URL}/assets/arrow-head.png`} alt="test" />
      </Arrow>
    </ArrowNavLink>
  )
}

