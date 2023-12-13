import React from 'react'
import styled from 'styled-components/macro';
import { NavLink, useNavigate } from 'react-router-dom';

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
  transform: ${(props) => (props.$goBack ? 'rotate(180deg)' : '')};

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

export const ArrowNavLinkWithoutLink = styled.div`
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

export const GoBackNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  z-index: 998;
  letter-spacing: 0.2rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0;
  margin-top: 10px;
  width: fit-content;
  transform: rotate(180deg);
  position: fixed;
  left: 0px;
  bottom: 0px;
  background: #222222;
  padding: 10px;
  width: 90px;

    &:hover {
      color: #e27b5b;
    }

    .arrow {
      width: 40px;
      transition: all 0.3s ease;
      border: ${(props) => (props.$white ? '1px solid #222222' : '1px solid #fff')};
      position: relative;
      background: #fff;
      right: -14px;
      border-radius: 70px;
    }
  
    &:hover .arrow {
      width: 60px;
    }
  }
`

export const GoDownNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  z-index: 998;
  letter-spacing: 0.2rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0;
  margin-top: 10px;
  width: fit-content;
  transform: rotate(90deg);
  background: transparent;
  padding: 10px;
  width: 90px;

    &:hover {
      color: #e27b5b;
    }

    .arrow {
      width: 40px;
      transition: all 0.3s ease;
      border: ${(props) => (props.$white ? '1px solid #222222' : '1px solid #fff')};
      position: relative;
      background: #fff;
      right: -14px;
      border-radius: 70px;
    }
  
    &:hover .arrow {
      width: 60px;
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

export const ArrowHead2 = styled.img`
  height: 30;
`

export const ArrowBack = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s ease;
  justify-content: center;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    display: flex;
  }

  @media (min-width: 1280px) {
    display: flex;
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

export const ArrowButton2 = ({ isSmall, isWhite, text }) => {
  return (
    <ArrowNavLinkWithoutLink
      $small={isSmall}
      $white={isWhite}>
      {isWhite ? '' : `${text}`}
      <Arrow $small={isSmall}>
        <span className="arrow" />
        <ArrowHead $white={isWhite} src={isWhite ? `${process.env.PUBLIC_URL}/assets/arrow-black.png` : `${process.env.PUBLIC_URL}/assets/arrow-head.png`} alt="arrow-head" />
      </Arrow>
    </ArrowNavLinkWithoutLink>
  )
}

export const GoBackButton = ({ isSmall, isWhite }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <GoBackNavLink
      onClick={goBack}
      $goBack
      $small={isSmall}
      $white={isWhite}>
      <ArrowBack $small={isSmall}>
        <span className="arrow" />
        <ArrowHead2
          $white={isWhite}
          src={`${process.env.PUBLIC_URL}/assets/arrow-head-big.png`}
          alt="arrow-head"
          style={{ height: 30 }} />
      </ArrowBack>
    </GoBackNavLink>
  )
}

export const ArrowDown = ({ isSmall, isWhite }) => {
  return (
    <GoDownNavLink
      $goBack
      $small={isSmall}
      $white={isWhite}>
      <ArrowBack $small={isSmall}>
        <span className="arrow" />
        <ArrowHead2
          $white={isWhite}
          src={`${process.env.PUBLIC_URL}/assets/arrow-head-big.png`}
          alt="arrow-head"
          style={{ height: 30 }} />
      </ArrowBack>
    </GoDownNavLink>
  )
}
