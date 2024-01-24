import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--primary-color);
  padding: 0px;
  padding-bottom: 50px;
  z-index: 1;
  
  @media (min-width: 744px) and (max-width: 1279px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80%;
    height: 80%;
    padding: 0px 20px 20px 20px;
    z-index: 0;
    box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
  }

  @media (min-width: 1280px) {
    position: absolute;
    left: 70px;
    top: 70px;
    width: 60%;
    height: 75%;
    padding: 0px 20px 20px 20px;
    z-index: 0;
    box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
  }
`

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  gap: 40px;
  padding: 0px 0px 70px 0px;
  
  @media (min-width: 744px) and (max-width: 1279px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80%;
    height: 90%;
    padding: 0px 20px 20px 20px;
    z-index: 0;
  }

  @media (min-width: 1280px) {
    padding: 0px 20px 20px 20px;
    position: absolute;
    right: 70px;
    top: 70px;
    width: 50%;
    height: 80%;
    z-index: 0;
  }
`

export const ListWrapperNews = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--primary-color);
  padding: 0px;
  
  @media (min-width: 744px) and (max-width: 1279px) {
    box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
    height: 60%;
    padding: 0px 20px 20px 20px;
  }

  @media (min-width: 1280px) {
    box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
    height: 60%;
    padding: 0px 20px 20px 20px;
  }
`

export const ListHeader = styled.h2`
  color: var(--secondary-color);
  letter-spacing: .2rem;
  font-size: 13vw;

  @media (min-width: 350px) and (max-width: 743px) {
    font-size: 45px;
  }
  
  @media (min-width: 744px) and (max-width: 1279px) {
    padding: 0px;
    color: var(--secondary-color);
    font-size: 52px;
  }

  @media (min-width: 1280px) {
    color: var(--secondary-color);
    font-size: 60px;
  }
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: ${(props) => (props.$news ? '5px' : '')};

  @media (min-width: 744px) and (max-width: 1279px) {
    overflow-y: scroll;
    height: 100%;
    overflow-x: hidden;
    gap: ${(props) => (props.$news ? '15px' : '')};
  }

  @media (min-width: 1280px) {
    left: 100px;
    height: 100%;
    top: 170px;
    overflow-y: scroll;
    overflow-x: hidden;
    gap: ${(props) => (props.$news ? '15px' : '')};
  }

  .noted {
    color: var(--primary-color);
  }
`

export const ListItemCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 15px 10px;
  gap: 15px;
  width: auto;
  border-bottom: 0.5px solid var(--secondary-color);
  border-left: 0.5px solid var(--secondary-color);
  border-right: 0.5px solid var(--secondary-color);

  @media (min-width: 744px) and (max-width: 1279px) {
    align-items: center;
    gap: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: auto;
  }

  @media (min-width: 1280px) {
    align-items: center;
    gap: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: auto;

    &:hover .arrow {
      width: 70px;
    }
  }
`

export const ListItemCardNews = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 15px 20px 15px;
  gap: 20px;
  background: var(--secondary-color);

  @media (min-width: 744px) and (max-width: 1279px) {
    flex-direction: row;
    align-items: center;
    padding: 15px;
    gap: 20px;
    justify-content: space-between;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    padding: 15px;
    gap: 5px;
    justify-content: space-between;
    gap: 20px;
  }

  &:hover .arrow {
    width: 70px;
  }
`

export const StyledH5 = styled.h5`
  color: #222222;
  width: auto;
  font-size: 24px;
  margin: 0;
  word-break: break-word;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: auto;
    word-break: normal;
  }

  @media (min-width: 1280px) {
    width: auto;
    word-break: normal;
  }
`

export const DateHeader = styled.h4`
  color: #222222;
  background: white;
  font-size: 24px;
  margin: 0;
  font-weight: 500;
  padding: 20px 10px 10px;
  border-bottom: 0.5px solid var(--secondary-color);

    @media (min-width: 744px) and (max-width: 1279px) {
    }

    @media (min-width: 1280px) {
    }
`

export const ListDetailsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`

export const ListDetailsSectionNews = styled(ListDetailsSection)`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 744px) and (max-width: 1279px) {
    height: auto;
    justify-content: space-between;
    gap: 0px;
  }

  @media (min-width: 1280px) {
    height: 100%;
    justify-content: space-between;
    gap: 0px;
  }
`

export const ListDetailsSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${(props) => (props.$news ? '80%' : '70%')};
  gap: ${(props) => (props.$news ? '10px' : '5px')};

  @media (min-width: 744px) and (max-width: 1279px) {
    width: ${(props) => (props.$news ? '80%' : '60%')};
  }

  @media (min-width: 1280px) {
    width: ${(props) => (props.$news ? '80%' : '60%')};
  }
`

export const ListDetailsSpanHeader = styled(ListDetailsSpan)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10px;
  justify-content: space-between;

  @media (min-width: 744px) and (max-width: 1279px) {
    justify-content: flex-start;
    width: fit-content;
  }

  @media (min-width: 1280px) {
    justify-content: flex-start;
    width: fit-content;
  }
`

export const ListParagraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  color: black;
  width: 100%;
  font-family: ${(props) => (props.$day ? 'Barlow Semi Condensed' : 'tablet-gothic')};

  & em {
    font-weight: 900;
  }

    @media (min-width: 744px) and (max-width: 1279px) {
      overflow-wrap: normal;
      width: auto;
    }

    @media (min-width: 1280px) {
      overflow-wrap: normal;
      width: auto;
    }
`

export const ListParagraphNews = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  color: black;
  width: 100%;
  font-family: ${(props) => (props.$day ? 'Barlow Semi Condensed' : 'tablet-gothic')};

  & em {
    font-weight: 900;
  }

    @media (min-width: 744px) and (max-width: 1279px) {
      -webkit-line-clamp: 3;
      overflow-wrap: normal;
      width: auto;
    }

    @media (min-width: 1280px) {
      -webkit-line-clamp: 3;
      overflow-wrap: normal;
      width: auto;
    }
`

export const FacititatorDetails = styled.p`
  font-weight: 700;
  color: #222222;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 744px) and (max-width: 1279px) {
  }

  @media (min-width: 1280px) {
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 10px;
  margin-bottom: ${(props) => (props.$right ? '0px' : '20px')};
  padding: ${(props) => (props.$right ? '15px 15px 0px' : '15px')};
  background: var(--primary-color);
  border-bottom: ${(props) => (props.$right ? '15px solid var(--primary-blue)' : '')};

  @media (min-width: 744px) and (max-width: 1279px) {
    margin: 0px;
    padding: ${(props) => (props.$right ? '10px' : '15px 0px')};
    background: var(--primary-color);
    border-bottom: ${(props) => (props.$right ? '15px solid var(--primary-yellow)' : '')};
  }

  @media (min-width: 1280px) {
    margin: 0;
    padding: ${(props) => (props.$right ? '10px 10px 0px' : '15px 0px')};
    align-items: ${(props) => (props.$right ? 'center' : '')};
    background: var(--primary-color);
    border-bottom: ${(props) => (props.$right ? '15px solid var(--primary-yellow)' : '')};
  }
`

export const LoaderContainer = styled.div`
  height: 60vh;

  @media (min-width: 744px) and (max-width: 1279px) {
    height: 100%;
  }

  @media (min-width: 1280px) {
    height: 100%;
  }
`

export const NewsImage = styled.img`
  width: 100%;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 30%;
  }

  @media (min-width: 1280px) {
    width: 30%;
  }
`

export const NewsImgWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(1,1fr);
  height: 200px;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);

  @media (min-width: 744px) and (max-width: 1279px) {
    grid-template-columns: repeat(3,1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3,1fr);
  }
`
export const NewsImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`

export const CalendarNavLink = styled(NavLink)`
  color: var(--secondary-color); 
  width: 100%;
  display: block;
  font-weight: 500;
  line-height: 22px;
`