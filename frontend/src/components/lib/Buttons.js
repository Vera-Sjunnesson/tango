import React from 'react'
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const ArrowNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  background: ${(props) => (props.$white ? 'transparent' : '#222222')};
  color: #fff;
  font-weight: 500;
  padding: ${(props) => (props.$small ? '10px 10px 10px 0px' : '10px 20px')};
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
    }

    .arrow {
      width: 30px;
      transition: all 0.3s ease;
      border: ${(props) => (props.$white ? '1px solid #222222' : '1px solid #fff')};
      position: relative;
      background: #fff;
      right: ${(props) => (props.$white ? '-13px' : '-10px')};
      border-radius: 70px;
    }
  
    &:hover .arrow {
      width: 50px;
    }
  }
`

export const Arrow = styled.span`
  display: flex;
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
  width: ${(props) => (props.$white ? '15px' : '10px')};
`

export const ArrowButton = ({ isSmall, isWhite, path, text }) => {
  return (
    <ArrowNavLink
      to={`/${path}`}
      $small={isSmall}
      $white={isWhite}>
      {isWhite ? '' : `${text}`}
      <Arrow $small={isSmall}>
        <span className="arrow" />
        <ArrowHead $white={isWhite} src={isWhite ? `${process.env.PUBLIC_URL}/assets/arrow-black.png` : `${process.env.PUBLIC_URL}/assets/arrow-head.png`} alt="arrow-head" />
      </Arrow>
    </ArrowNavLink>
  )
}

