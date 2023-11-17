import React from 'react'
import styled from 'styled-components/macro';
import { MenuButton } from 'components/lib/MenuButton';

export const MenuContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
gap: 20px;
width: 80%; 
height: 335px;
left: 0;
right: 0;
margin: auto;
margin-top: 40px;
margin-bottom: 40px;

@media (min-width: 1280px) {
  flex-direction: row;
  width: 1010px;
  height: 200px;
  gap: 46px;
  margin-top: auto;
  margin-bottom: auto;
}

`

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuButton
        color="rgba(238, 195, 66, 1)"
        to="/kalendarium"
        img={`${process.env.PUBLIC_URL}/images/dragspel.png`}
        buttonText="KALENDARIUM" />
      <MenuButton
        color="#518a93"
        to="/aktuellt"
        img={`${process.env.PUBLIC_URL}/images/S02_1801_d.jpg`}
        buttonText="AKTUELLT" />
      <MenuButton
        color="#e78432"
        to="/kalendarium"
        img={`${process.env.PUBLIC_URL}/images/C04_3948_d.jpg`}
        buttonText="OM TANGO" />
    </MenuContainer>
  )
}