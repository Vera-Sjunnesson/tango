import React from 'react'
import styled from 'styled-components/macro';
import { MenuButton } from 'components/lib/MenuButton';

export const MenuContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 46px;
width: 1010px; 
/* max-width: 1091px; */
height: 200px;
/* position: fixed; */
/* top: 32px; */
left: 0;
right: 0;
margin: auto;

`

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuButton
        to="#sectionFour"
        color="rgba(238, 195, 66, 0.95)"
        img={`${process.env.PUBLIC_URL}/images/omfamning01.jpg`}
        buttonText="KALENDARIUM" />
      <MenuButton
        to="#sectionFive"
        color="rgba(240, 130, 37, 0.90)"
        img={`${process.env.PUBLIC_URL}/images/omfamning01.jpg`}
        buttonText="AKTUELLT" />
      <MenuButton
        to="#sectionFive"
        color="rgba(225, 74, 35, 0.88)"
        img={`${process.env.PUBLIC_URL}/images/omfamning01.jpg`}
        buttonText="SAVE THE DATE" />
    </MenuContainer>
  )
}