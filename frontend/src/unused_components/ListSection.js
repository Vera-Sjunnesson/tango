import React from 'react';
import styled from 'styled-components/macro';
import { renderMarkdown } from 'components/pages/details/NewsDetails';
import { NavLink } from 'react-router-dom';
import { ArrowButton2, ArrowButton } from '../components/lib/Buttons';
import { Loader } from '../components/lib/loader';
import { ListDescription } from '../components/pages/calendar_news/sections_calendar_news/ListDescription';

export const ListWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 400px;
  width: 100%;
  height: 100%;
  background: white;
  padding: 0px;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);

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

export const ListHeader = styled.h4`
  color: #222222;
  font-weight: 900;
  letter-spacing: .2rem;
  
  @media (min-width: 744px) and (max-width: 1280px) {
    padding: 0px;
  }

  @media (min-width: 1280px) {
    padding: 10px 0 10px 0;
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
  }

  @media (min-width: 1280px) {
    left: 100px;
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
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    align-items: center;
    gap: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 1280px) {
    align-items: center;
    gap: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const ListItemCardNews = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 15px 10px;
  gap: 15px;
  width: 100%;

  @media (min-width: 744px) and (max-width: 1280px) {
    align-items: center;
    gap: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 1280px) {
    align-items: center;
    gap: 5px;
    flex-direction: row;
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
  width: 100%;
  font-size: 24px;
  margin: 0;
  font-weight: 500;
  padding: 20px 10px 10px;

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
  height: 100%;
  align-items: flex-start;
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
  margin-bottom: 20px;
  padding: 15px;

  @media (min-width: 744px) and (max-width: 1280px) {
    margin: 0px;
    padding: 15px 0px;
  }

  @media (min-width: 1280px) {
    margin: 0;
    padding: 15px 0px;
  }
`

// Function to sort list items by date
const sortListItemsByDate = (list) => {
  const sortedList = {};

  // Group list items by date
  list.forEach((item) => {
    const date = new Date(item.starts);
    const formatter = new Intl.DateTimeFormat('sv-SE', { weekday: 'short', day: 'numeric', month: 'short' });
    const formattedDate = formatter.format(date).replace('.', '');

    if (sortedList[formattedDate]) {
      sortedList[formattedDate].push(item);
    } else {
      sortedList[formattedDate] = [item];
    }
  });

  return sortedList;
};

export const ListSection = ({ listHeader, loading, list, isDark, isRight }) => {
  const sortedList = sortListItemsByDate(list);

  const formatDate = (inputDate) => {
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    };
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString('sv-SE', options);
    const [weekday, day, monthWithDot] = formattedDate.split(' ');
    const monthWithoutDot = monthWithDot.replace('.', '');
    return `${weekday} ${day} ${monthWithoutDot}`;
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'practica':
        return '#518a93';
      case 'class':
        return '#edc343';
      case 'milonga':
        return '#e88025';
      case 'festival':
        return '#fef0c8';
      default:
        return '#ffffff';
    }
  };

  return (
    <ListWrapper $right={isRight}>
      <HeaderContainer>
        <ListHeader>{listHeader.toUpperCase()}</ListHeader>
        <ListDescription />
      </HeaderContainer>
      <ListContainer $dark={isDark}>
        {!loading
          && Object.keys(sortedList).map((date) => (
            <div style={{ width: '100%' }} key={date}>
              <DateHeader>{date}</DateHeader>
              {sortedList[date].map((listItem) => {
                const bgColor = getBackgroundColor(listItem.type); // Get background color
                return (
                  <NavLink to={`/kalendarium/${listItem.id}`}>
                    <ListItemCard className="noted" key={listItem.id} style={{ backgroundColor: bgColor }}>
                      <StyledH5>{listItem.title}</StyledH5>
                      <ListParagraph $day>
                        {formatDate(listItem.starts)}
                      </ListParagraph>
                      <ListDetailsSection>
                        <ListDetailsSpan>
                          <ListParagraph
                            dangerouslySetInnerHTML={{ __html: renderMarkdown(listItem.body) }} />
                          <FacititatorDetails>{listItem.facilitator}</FacititatorDetails>
                        </ListDetailsSpan>
                        <ArrowButton2 isSmall isWhite />
                      </ListDetailsSection>
                    </ListItemCard>
                  </NavLink>
                );
              })}
            </div>
          ))}
        {loading
          && (
            <Loader />
          )}
      </ListContainer>
    </ListWrapper>
  );
}

export const ListSectionNews = ({ listHeader, loading, list, isDark, isRight }) => {
  return (
    <ListWrapper $right={isRight}>
      <HeaderContainer>
        <ListHeader>{listHeader.toUpperCase()}</ListHeader>
      </HeaderContainer>
      <ListContainer $dark={isDark}>
        {!loading && list.map((listItem) => {
          return (
            <ListItemCardNews className="noted" key={listItem.newsid}>
              <ListDetailsSectionNews>
                <ListDetailsSpan>
                  <StyledH5>{listItem.title}</StyledH5>
                  <ListParagraphNews
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(listItem.body) }} />
                </ListDetailsSpan>
                <ArrowButton isSmall isWhite path={`aktuellt/${listItem.id}`} />
              </ListDetailsSectionNews>
            </ListItemCardNews>
          )
        })}
        {loading
          && (
            <Loader />
          )}
      </ListContainer>
    </ListWrapper>
  );
}