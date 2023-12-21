import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  @media (min-width: 744px) and (max-width: 1280px) {
  }

  @media (min-width: 1280px) {
    display: contents;
  }
`

export const ListHeader = styled.h2`
  letter-spacing: .2rem;
  font-size: 52px;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 0px;
  }

  @media (min-width: 1280px) {
    font-size: 80px;
    padding: 10px 0 10px 0;
  }
`

export const ListHeaderSmall = styled(ListHeader)`
  font-size: 2.5rem;
  padding: 10px;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    font-size: 80px;
    padding: 30px 0px 10px 0px;
  }

  @media (min-width: 1280px) {
    font-size: 80px;
    padding: 20px 0px 0px 0px;
  }
`

export const HeaderSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 0px;
  }

  @media (min-width: 1280px) {
    padding: 10px 0 10px 0;
  }
`

export const Description = styled.h5`
  font-weight: 700;
  color: #222222;
`

export const Card = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 100%;
  }

  @media (min-width: 1280px) {
    width: 100%;
    height: 100%;

    &:hover .title {
      color: white;
    }

    .title {
      font-size: 16px;

      @media (min-width: 744px) and (max-width: 1280px) {
        font-size: 20px;
      }
    
      @media (min-width: 1280px) {
        font-size: 20px;
    }
  }
  }

`

export const TangoCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  padding: 10px 0px;
  margin: 30px 0px;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(200px, auto);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(200px, auto);
  }
`
