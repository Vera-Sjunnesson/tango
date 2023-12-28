import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const DetailsContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1154px;
  overflow-x: hidden;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 1617px; 
    overflow-x: hidden;
    background: #fff7f1;
  }

  @media (min-width: 1280px) {
    height: ${(props) => (props.$venue ? '' : '120vh')};
    display: block;
    background: #fff7f1;
  }
`

export const DetailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  position: absolute;
  top: 171px;
  width: 100%;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    z-index: 990;
  }
  
  @media (min-width: 1280px) {
    z-index: 1010;
  }
`;

export const DetailsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 15px;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 80%;
    padding: 0;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    width: 80%;
    padding: 0;
  }
`;

export const DetailsSpan = styled.span`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 15px;
  justify-content: space-between;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    width: 100%;
  }
`;

export const DetailsHeader = styled.h2`
  color: var(--secondary-color);
  
  @media (min-width: 744px) and (max-width: 1280px) {
    margin-bottom: 20px;
    padding: 0px;
  }

  @media (min-width: 1280px) {
    padding: 0;
    margin-bottom: 20px;
  }
`

export const TimeAndPlaceDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DetailsImage = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    height: 100%;
    height: auto;
  }
`;

export const VenueAnchor = styled(NavLink)`
  color: #222222;
  text-decoration: underline;
  font-weight: 900;

  &:hover {
    color: #e88025;
  }
`;

export const VenueDetailsSpan = styled.span`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const ListParagraphSection = styled.div`
  & a {
    color: var(--secondary-color);
    font-family: var(--primary-font-family);
    font-weight: 900;
    line-height: 22.5px;
    letter-spacing: -0.408px;
  }

  & b {
    font-family: var(--primary-font-family);
    font-weight: 400;
    line-height: 22.5px;
    letter-spacing: -0.408px;
  }
`