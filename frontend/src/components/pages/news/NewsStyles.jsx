import styled from 'styled-components';

export const BackgroundGradeContainer = styled.div`
  height: 100vh;
  background-image: url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: top;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1279px) {
    background-image: linear-gradient(${(props) => (props.$grade || '')}), url(${(props) => (props.$img || '')});
  }

  @media (min-width: 1280px) {
    background-image: linear-gradient(${(props) => (props.$grade || '')}), url(${(props) => (props.$img || '')});
  }
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    position: relative;
    flex-direction: column;
  }

  @media (min-width: 1280px) {
    position: relative;
    flex-direction: column;
  }
`

export const StyledWrapper = styled.div`
  height: 39vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (min-width: 744px) and (max-width: 1280px) {
    height: 100vh;
    display: flex;
  }

  @media (min-width: 1280px) {
    display: contents;
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
  gap: 5px;

  @media (min-width: 744px) and (max-width: 1279px) {
    overflow-y: scroll;
    height: 100%;
    overflow-x: hidden;
    gap: 15px;
  }

  @media (min-width: 1280px) {
    left: 100px;
    height: 100%;
    top: 170px;
    overflow-y: scroll;
    overflow-x: hidden;
    gap: 15px;
  }

  .noted {
    color: var(--primary-color);
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

export const ListDetailsSectionNews = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 744px) and (max-width: 1279px) {
    height: auto;
    gap: 0px;
  }

  @media (min-width: 1280px) {
    height: 100%;
    gap: 0px;
  }
`

export const ListDetailsSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  gap: 10px;
`

export const ListParagraphNews = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  width: 100%;
  font-family: 'tablet-gothic', sans-serif;
  font-size: ${(props) => (props.$day ? '16px' : '')};

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

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 10px;
  margin-bottom: 0px;
  padding: 15px 15px 0px;
  background: var(--primary-color);
  border-bottom: 15px solid var(--primary-blue);

  @media (min-width: 744px) and (max-width: 1279px) {
    margin: 0px;
    padding: 10px;
    background: var(--primary-color);
    border-bottom: 15px solid var(--primary-yellow);
  }

  @media (min-width: 1280px) {
    margin: 0;
    padding: 10px 10px 0px;
    align-items: center;
    background: var(--primary-color);
    border-bottom: 15px solid var(--primary-yellow);
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