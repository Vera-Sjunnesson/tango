import React from 'react'
import { MenuButtonContainer, TextContainer, Arrow } from '../styles_hero/HeroStyles'

export const MenuButton = ({ img, buttonText, to, position }) => {
  return (
    <MenuButtonContainer type="button" to={`${to}`} style={{ backgroundImage: `linear-gradient(358deg, rgba(34, 34, 34, 0.4) 22.53%, rgba(255, 255, 255, 0) 100%), url(${img})`, backgroundPosition: `${position}` }}>
      <TextContainer>
        {buttonText}
        <Arrow>
          <span className="arrow" />
          <img src={`${process.env.PUBLIC_URL}/assets/arrow-head-big.png`} alt="test" style={{ height: 30 }} />
        </Arrow>
      </TextContainer>
    </MenuButtonContainer>
  )
}