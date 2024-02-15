import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ArrowBig from '../../assets/graphics/arrow-head-big.png'

export const MenuButtonContainer = styled(NavLink)`
  background-size: cover;
  background-position: top;
  height: 175px;
  width: 100%;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
  color: var(--primary-color);
  font-size: 25px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  transition: all 0.3s ease-in-out;

  .arrow {
    width: 30px;
    transition: all 0.3s ease;
    border: 1px solid #fff;
    position: relative;
    background: #fff;
    right: -14px;
    border-radius: 70px;
  }

  @media (min-width: 744px) and (max-width: 999px) {
    height: 221px;
  }

  @media (min-width: 1000px) and (max-width: 1279px) {
    height: 100%;
  }

  @media (min-width: 1280px) {
    height: 100%;

    &:hover .arrow {
      width: 55px;
    }
  }
`

export const TextContainer = styled.span`
  height: 50px;
  width: 100%;
  color: var(--primary-color);
  font-size: 25px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: var(--primary-blue);
  font-weight: 500;
  color: white;
  text-decoration: none;
  position: relative;
  box-sizing: border-box;
  padding: 10px 0;
  letter-spacing: .2rem;
  font-family: var(--secondary-font-family)
`

export const Arrow = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s ease;
  justify-content: flex-start;
`

export const MenuButton = ({ img, buttonText, to, position }) => {
  return (
    <MenuButtonContainer
      type="button"
      to={`${to}`}
      style={{ 
        backgroundImage: `linear-gradient(358deg, rgba(34, 34, 34, 0.4) 22.53%, rgba(255, 255, 255, 0) 100%), url(${img})`, 
        backgroundPosition: `${position}` }}>
      <TextContainer>
        {buttonText}
        <Arrow>
          <span className="arrow" />
          <img
            src={ArrowBig}
            alt="arrow button"
            style={{ height: 30 }} />
        </Arrow>
      </TextContainer>
    </MenuButtonContainer>
  )
}