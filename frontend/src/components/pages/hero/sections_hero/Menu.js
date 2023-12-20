import React from 'react'
import { MenuButton } from 'components/pages/hero/sections_hero/MenuButton';
import { MenuContainer } from '../styles_hero/HeroStyles';

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuButton
        position="top"
        to="/kalendarium"
        img={`${process.env.PUBLIC_URL}/images/button-image.jpg`}
        buttonText="KALENDARIUM" />
      <MenuButton
        position="bottom"
        to="/aktuellt"
        img={`${process.env.PUBLIC_URL}/images/dragspel3.png`}
        buttonText="AKTUELLT" />
      <MenuButton
        position="bottom"
        to="/om-tango"
        img={`${process.env.PUBLIC_URL}/images/tango-performance3.png`}
        buttonText="OM TANGO" />
    </MenuContainer>
  )
}
