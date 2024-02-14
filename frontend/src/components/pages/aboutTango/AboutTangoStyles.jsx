import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  @media (min-width: 744px) and (max-width: 1279px) {
    position: auto;
    overflow-x: auto;
  }

  @media (min-width: 1280px) {
    display: contents;
  }

  .video-tango-wrapper {
    position: relative; 
    width: 100%;
    height: 508px;

    @media (min-width: 744px) and (max-width: 1279px) {
      height: auto;
    }
  
    @media (min-width: 1280px) {
      height: auto;
    }
  }

  .video-tango {
    height: 508px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: 744px) and (max-width: 1279px) {
      height: auto;
      max-width: 100%;
      width: 100%;
      top: auto;
      left: auto;
      transform: none;
      position: inherit;
    }
  
    @media (min-width: 1280px) {
      height: auto;
      max-width: 100%;
      width: 100%;
      top: auto;
      left: auto;
      transform: none;
      position: inherit;
    }
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

export const HeaderSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 998;
  
  @media (min-width: 744px) and (max-width: 1279px) {
    padding: 0px;
  }

  @media (min-width: 1280px) {
    padding: 10px 0 10px 0;
  }
`

export const LinkTitle = styled.h5`
  font-weight: 700;
  color: #222222;
`

export const Card = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: ${(props) => (props.$bgcolor || '')};

  .launch-icon {
    color: var(--secondary-color);
    padding: 0px 10px;
    font-size: 25px;
  }

  .title {
    font-size: 20px;

    @media (min-width: 744px) and (max-width: 1279px) {
      font-size: 20px;
    }
  
    @media (min-width: 1280px) {
      font-size: 20px;
    }
  }

  @media (min-width: 744px) and (max-width: 1279px) {
    height: 100%;
  }

  @media (min-width: 1280px) {
    width: 100%;
    height: 100%;

    &:hover {
      background-color: var(--secondary-color);
    }

    &:hover .title {
      color:var(--primary-color);
    }

    &:hover .launch-icon {
      color: var(--primary-color);
    }
  }
`

export const CardImage = styled.div`
  background-image: url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  grid-row: span 3;
  
  @media (min-width: 744px) and (max-width: 1279px) {
    grid-row: span 2;
    grid-column: ${(props) => (props.$standing ? 'span 1' : 'span 2')};
  }

  @media (min-width: 1280px) {
    grid-row: ${(props) => (props.$standing ? '1 / span 2' : '3 / span 2')};
    grid-column: ${(props) => (props.$standing ? '4 / span 1' : '1 / span 2')};
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

  @media (min-width: 744px) and (max-width: 1279px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(200px, auto);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(200px, auto);
  }
`