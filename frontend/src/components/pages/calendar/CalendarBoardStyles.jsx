
import styled from 'styled-components';
export const BackgroundContainer = styled.div`
  background-image: url(${(props) => (props.$img || '')});
  background-size: cover;
  background-position: top;
  position: relative;
  width: 100%;
  height: ${(props) => (props.$om ? '500px' : '100%')};

  @media (min-width: 744px) and (max-width: 1279px) {
    height: 100%;
  }

  @media (min-width: 1280px) {
    height: 100vh;
    position: relative;
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

  @media (min-width: 744px) and (max-width: 1279px) {
    overflow-y: scroll;
    height: 100%;
    overflow-x: hidden;
  }

  @media (min-width: 1280px) {
    left: 100px;
    height: 100%;
    top: 170px;
    overflow-y: scroll;
    overflow-x: hidden;
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
`

export const ListDetailsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`

export const ListDetailsSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  gap: 5px;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 60%;
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
  max-width: 561.711px;
}
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 10px;
  margin-bottom: 20px;
  padding: 15px;
  background: var(--primary-color);

  @media (min-width: 744px) and (max-width: 1279px) {
    margin: 0px;
    padding: 15px 0px;
    background: var(--primary-color);
  }

  @media (min-width: 1280px) {
    margin: 0;
    padding: 15px 0px;
    background: var(--primary-color);
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