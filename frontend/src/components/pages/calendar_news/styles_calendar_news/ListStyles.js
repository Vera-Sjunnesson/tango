import styled from 'styled-components/macro';

export const ListWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: ${(props) => (props.$right ? '147px' : '400px')};
  width: 100%;
  height: ${(props) => (props.$right ? '666px' : '100%')};
  background: var(--primary-color);
  padding: 0px;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
  overflow-y: ${(props) => (props.$right ? 'scroll' : '')};
  overflow-x: ${(props) => (props.$right ? 'hidden' : '')};

  @media (min-width: 744px) and (max-width: 1280px) {
    left: 100px;
    top: 179px;
    width: 80%;
    height: 65%;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    left: ${(props) => (props.$right ? '' : '70px')};
    right: ${(props) => (props.$right ? '70px' : '')};
    top: 70px;
    width: ${(props) => (props.$right ? '60%' : '60%')};
    height: 75%;
    padding: 20px;
  }
`

export const ListHeader = styled.h2`
  color: #222222;
  letter-spacing: .2rem;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 0px;
  }

  @media (min-width: 1280px) {
  }
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1280px) {
    left: 100px;
    top: 170px;
    overflow-y: scroll;
    height: 100%;
  }

  @media (min-width: 1280px) {
    left: 100px;
    height: 100%;
    height: 100%;
    top: 170px;
    overflow-y: scroll;
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

  @media (min-width: 744px) and (max-width: 1280px) {
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
  }
`

export const ListItemCardNews = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  gap: 15px;
  background: var(--primary-color);

  @media (min-width: 744px) and (max-width: 1280px) {
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 1280px) {
    align-items: center;
    gap: 5px;
    justify-content: space-between;
    gap: 20px;
  }
`

export const StyledH5 = styled.h5`
  color: #222222;
  width: 100%;
  font-size: 24px;
  margin: 0;

  @media (min-width: 744px) and (max-width: 1280px) {
    width: auto;
  }

  @media (min-width: 1280px) {
    width: auto;
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

    @media (min-width: 744px) and (max-width: 1280px) {
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
  justify-content: center;
  gap: 20px;

  @media (min-width: 744px) and (max-width: 1280px) {
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
  gap: 5px;
  align-items: flex-start;
  width: 60%;
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

    @media (min-width: 744px) and (max-width: 1280px) {
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
  -webkit-line-clamp: 4;
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

    @media (min-width: 744px) and (max-width: 1280px) {
      overflow-wrap: normal;
      width: auto;
    }

    @media (min-width: 1280px) {
      overflow-wrap: normal;
      width: auto;
    }
`

export const FacititatorDetails = styled.p`
  font-weight: 700;
  color: #222222;

  @media (min-width: 744px) and (max-width: 1280px) {
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

  @media (min-width: 744px) and (max-width: 1280px) {
    margin: 0px;
    padding: ${(props) => (props.$right ? '10px 10px 0px' : '15px 0px')};
  }

  @media (min-width: 1280px) {
    margin: 0;
    padding: ${(props) => (props.$right ? '10px 10px 0px' : '15px 0px')};
    align-items: ${(props) => (props.$right ? 'center' : '')};
  }
`