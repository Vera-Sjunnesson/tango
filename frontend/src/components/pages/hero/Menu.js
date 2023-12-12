import React from 'react'
import styled from 'styled-components/macro';
import { MenuButton } from 'components/lib/MenuButton';

export const MenuContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
gap: 30px;
width: 80%; 
left: 0;
right: 0;
margin: auto;
margin-top: 40px;
margin-bottom: 40px;

@media (min-width: 744px) and (max-width: 1280px) {
  position: absolute;
  z-index: 1;
}

@media (min-width: 1280px) {
  flex-direction: row;
  width: 1010px;
  gap: 46px;
  height: 30%;
  margin-top: 40px;
  margin-bottom: 40px;
}

`

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuButton
        position="top"
        to="/kalendarium"
        img={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`}
        buttonText="KALENDARIUM" />
      <MenuButton
        position="top"
        to="/aktuellt"
        img={`${process.env.PUBLIC_URL}/images/S02_1842_d.jpg`}
        buttonText="AKTUELLT" />
      <MenuButton
        position="bottom"
        to="/om-tango"
        img={`${process.env.PUBLIC_URL}/images/tango-performance.jpg`}
        buttonText="OM TANGO" />
    </MenuContainer>
  )
}
