import styled from 'styled-components';

/* HERO */
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 744px) and (max-width: 999px) {
    width: 100%;
    display: block;
    position: relative;
    height: 1741px;
    background: var(--secondary-background-color);
  }

  @media (min-width: 1000px) and (max-width: 1279px) {
    width: 100%;
    display: block;
    position: relative;
    height: 1127px;
    background: var(--secondary-background-color);
  }

  @media (min-width: 1280px) {
    width: 100%;
    position: relative;
    height: 100vh;
    display: block;
    background: var(--secondary-background-color);
  }
`

export const LoaderContainer = styled.div`
  height: 100vh;
`

export const HeroWrapper = styled.div`
  display: contents;

  @media (min-width: 744px) and (max-width: 1279px) {
    position: absolute;
    top: 132px;
    left: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
  }

  @media (min-width: 1280px) {
    position: absolute;
    width: 100%;
    top: 16vh;
    height: 84vh;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

/* MENU BUTTONS */
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