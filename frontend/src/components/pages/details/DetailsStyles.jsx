import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1280px) {
    overflow-x: hidden;
    background: var(--secondary-background-color);
    padding-bottom: 30px;
  }

  @media (min-width: 1280px) {
    height: ${(props) => (props.$venue ? '' : '')};
    display: block;
    background: var(--secondary-background-color);
    padding-bottom: 30px;
  }
`

export const DetailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  width: 100%;
  min-height: 87vh;
  padding: 10px 0px 20px 0px;
  
  @media (min-width: 744px) and (max-width: 1279px) {
    z-index: 990;
    top: 140px;
    padding: ${(props) => (props.$venue ? '0px' : '30px 0px')};
    justify-content: center;
  }
  
  @media (min-width: 1280px) {
    z-index: 1010;
    justify-content: center;
    padding: 0px;
  }
`;

export const DetailsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 15px;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: ${(props) => (props.$venue ? '90%' : '80%')};
    padding: 0;
    display: ${(props) => (props.$venue ? 'grid' : '')};
    grid-template-columns: repeat(2,1fr);
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: ${(props) => (props.$venue ? '70%' : '80%')};
    padding: 0;
    gap: 40px;
  }
`;

export const NoLocationCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 100px 15px;

  @media (min-width: 1280px) {
    padding: 0 15px 200px;
  }
`;

export const DetailsSpan = styled.span`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0px 15px 30px 15px;
  justify-content: space-between;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 100%;
    padding: 0px 15px;
    justify-content: flex-start;
  }

  @media (min-width: 1280px) {
    width: 100%;
    padding: 0px;
    justify-content: flex-start;
  }
`;

export const DetailsHeader = styled.h2`
  color: var(--secondary-color);
  line-height: 50px;
  
  @media (min-width: 744px) and (max-width: 1279px) {
    margin-bottom: 20px;
    padding: 0px;
    line-height: 60px;
  }

  @media (min-width: 1280px) {
    padding: 0;
    margin-bottom: 20px;
    line-height: 60px;
  }
`

export const StyledParagraph = styled.p`
  font-weight: 500;
  display: inline-block;

  & em {
    font-weight: 900;
  }
`

export const StyledParagraphBold = styled.span`
  font-weight: 700;
  color: #222222;
  display: inline-block;

  & em {
    font-weight: 900;
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

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1280px) {
    height: 100%;
    width: 100%;
  }
`;

export const Detailsmap = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    width: 90%;
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
    width: 100%;
  }
`;

export const ListParagraphSection = styled.div`
  & a {
    color: var(--secondary-color);
    font-family: var(--primary-font-family);
    font-weight: 900;
    line-height: 22.5px;
    letter-spacing: -0.408px;

    &:hover {
      text-decoration: underline;
    }

    @media (min-width: 1280px) {
      width: 100%;
    }
  }

  & b {
    font-family: var(--primary-font-family);
    font-weight: 400;
    line-height: 22.5px;
    letter-spacing: -0.408px;
  }
`

export const LoaderContainer = styled.div`
  height: 80vh;

  @media (min-width: 744px) and (max-width: 1279px) {
    height: 80vh;
  }

  @media (min-width: 1280px) {
    height: 80vh;
  }
`