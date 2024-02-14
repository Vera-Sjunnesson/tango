import styled from 'styled-components';


export const BackgroundContainer = styled.div`
  background-image: url(${(props) => (props.$img || '')});
  background-position: left top, left center, left bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--primary-yellow);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 60px 0px 0px 0px;

  @media (min-width: 744px) and (max-width: 1279px) {
    padding: 60px 0px 0px 0px;
  }

  @media (min-width: 1280px) {
    height: 100%;
    position: relative;
    gap: 40px;
    padding: 60px 0px 0px 0px;
    align-items: flex-start;
  }
`

export const BackgroundContainer2 = styled.div`
  background-color: var(--primary-yellow);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 744px) and (max-width: 1279px) {
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const BackgroundContainer3 = styled.div`
  background-color: var(--primary-yellow);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 60px 0px 60px 0px;

  @media (min-width: 744px) and (max-width: 1279px) {
  }

  @media (min-width: 1280px) {
    background-image: url(${(props) => (props.$img || '')});
    background-position: left top, left center, left bottom;
    background-size: 50%;
    background-repeat: no-repeat;
    height: 100%;
    position: relative;
    flex-direction: row;
    justify-content: flex-end;
    gap: 40px;
  }
`

export const ListHeader = styled.h2`
  letter-spacing: .2rem;
  font-size: 52px;
  
  @media (min-width: 744px) and (max-width: 1279px) {
    font-size: 60px;
    padding: 0px;
  }

  @media (min-width: 1280px) {
    font-size: 80px;
    padding: 10px 0 10px 0;
  }
`

export const ListHeaderSmall = styled(ListHeader)`
  font-size: 11vw;
  padding: 5px 10px 10px 10px;
  color: var(--secondary-color);
  line-height: 2.5rem;
  font-weight: 600;

  @media (min-width: 350px) and (max-width: 743px) {
    font-size: 45px;
  }

  @media (min-width: 744px) and (max-width: 1279px) {
    font-size: 60px;
    line-height: 80px;
    font-weight: 500;
  }

  @media (min-width: 1280px) {
    font-size: 60px;
    line-height: 80px;
    align-self: center;
    font-weight: 500;
  }
`

export const SideImage = styled.img`
  width: 90%;
  object-fit: cover;
  height: ${(props) => (props.$heightsize || '')};
  
  @media (min-width: 744px) and (max-width: 1279px) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    width: 100%;
  }
`

export const StyledListSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${(props) => (props.$interview ? '' : '30px 0')};

  @media (min-width: 744px) and (max-width: 1279px) {
    align-items: center;
  }

  @media (min-width: 1280px) {
    align-items: center;
    width: ${(props) => (props.$interview ? '50%' : '100%')};
    align-items: ${(props) => (props.$interview ? 'center' : 'flex-start')};
  }
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 20px 0px;
  align-items: center;
  width: 95%;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 60%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1280px) {
    display: block;
    align-items: flex-end;
    width: 100%;
  }
`

export const StyledList2 = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 30%;
    margin: 10px 0px;
    height: 60vh;
  }

  @media (min-width: 1280px) {
    width: 30%;
    margin: 15px 0px;
    height: 60vh;
  }
`

export const StyledList3 = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  align-items: center;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: auto;
    margin: 15px 0px;
    align-items: flex-start;
  }

  @media (min-width: 1280px) {
    width: auto;
    margin: 15px 0px;
    align-items: flex-start;
  }
`