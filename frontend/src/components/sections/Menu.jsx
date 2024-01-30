import styled from 'styled-components';
import { MenuButton } from './MenuButton';
import MenuImg1 from '../../assets/images/button-image.jpg'
import MenuImg2 from '../../assets/images/dragspel3.png'
import MenuImg3 from '../../assets/images/tango-performance3.png'

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 35px;
  width: 80%; 
  left: 0;
  right: 0;
  margin: 50px auto;

    @media (min-width: 744px) and (max-width: 999px) {
      gap: 46px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 80%;
      margin: 46px auto;
    }

    @media (min-width: 1000px) and (max-width: 1279px) {
      gap: 46px;
      flex-direction: row;
      justify-content: center;
      width: 90%;
      height: 187px;
      margin: 46px auto;
    }

    @media (min-width: 1280px) {
      flex-direction: row;
      width: 60%;
      min-width: 1010px;
      gap: 46px;
      height: 20%;
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
        img={MenuImg1}
        buttonText="KALENDARIUM" />
      <MenuButton
        position="bottom"
        to="/aktuellt"
        img={MenuImg2}
        buttonText="AKTUELLT" />
      <MenuButton
        position="bottom"
        to="/om-tango"
        img={MenuImg3}
        buttonText="OM TANGO" />
    </MenuContainer>
  )
}
