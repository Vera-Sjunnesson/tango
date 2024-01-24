import React, { useState, useEffect } from 'react';
import { StyledWrapper, BackgroundContainer, PageContainer } from 'components/lib/ContainerStyles';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import { NavLink } from 'react-router-dom';
import { Header } from 'components/lib/Header';
import { ArrowButtonSimple, GoBackButtonResponsive } from 'components/lib/Buttons';
import { useMediaQuery } from 'react-responsive'
import { ListDescription, ListSymbol } from 'components/pages/calendar_news/sections_calendar_news/ListDescription';
import { Loader } from 'components/lib/loader';
import { ListParagraph } from 'components/lib/Paragraphs';
import { CalendarDisplay } from './sections_calendar_news/CalendarDisplay';
import { ListWrapper, HeaderContainer, ListHeader, ListContainer, DateHeader, ListItemCard, StyledH5, ListDetailsSection, ListDetailsSpan, LoaderContainer, ListDetailsSpanHeader } from './styles_calendar_news/ListStyles';

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

export const CalendarBoard = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const sortedList = sortListItemsByDate(list);
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 744px)' })

  useEffect(() => {
    setLoading(true);
    const fetchEventList = async () => {
      try {
        const url = process.env.REACT_APP_EVENTLIST_URL;
        if (!url) {
          throw new Error('Failed to fetch event list');
        }
        const response = await fetch(url);
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    };

    fetchEventList();
  }, []);

  const formatTime = (inputDate) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric'
    };
    const date = new Date(inputDate);
    const formattedTime = date.toLocaleTimeString('sv-SE', options);
    const [hour, minutes] = formattedTime.split(':');
    return `kl ${hour}:${minutes}`;
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'milonga':
        return '#ef9d4d';
      case 'practica':
        return '#edc343';
      case 'class':
        return '#80b3bb';
      case 'festival':
        return '#eea484';
      default:
        return '#fef0c8';
    }
  };

  const getSymbolColor = (type) => {
    switch (type) {
      case 'milonga':
        return ['#ef9d4d', 'M'];
      case 'practica':
        return ['#edc343', 'P'];
      case 'class':
        return ['#80b3bb', 'C'];
      case 'festival':
        return ['#eea484', 'F'];
      default:
        return ['#fef0c8', 'A'];
    }
  };

  return (
    <>
      <Header isSmall />
      <PageContainer>
        <GoBackButtonResponsive />
        <StyledWrapper>
          <BackgroundContainer $img={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`} />
          <BackgroundLine isCover backgroundimg={`${process.env.PUBLIC_URL}/assets/line02-01.svg`} />
        </StyledWrapper>
        <ListWrapper>
          <HeaderContainer>
            <ListHeader>KALENDARIUM</ListHeader>
            <ListDescription />
          </HeaderContainer>
          <ListContainer className="list-scroll">
            {!loading
              && Object.keys(sortedList).map((date) => (
                <div style={{ width: '100%' }} key={date}>
                  <DateHeader>{date}</DateHeader>
                  {sortedList[date].map((listItem) => {
                    const bgColor = getBackgroundColor(listItem.type); // Get background color
                    const symbolDetails = getSymbolColor(listItem.type);
                    return (
                      <NavLink to={`/kalendarium/${listItem.id}`} key={listItem.id}>
                        {/* eslint-disable-next-line max-len */}
                        <ListItemCard key={listItem.id} style={{ backgroundColor: bgColor }}>
                          <ListDetailsSpanHeader>
                            <StyledH5>{listItem.title}</StyledH5>
                            {symbolDetails[0] !== '' && (
                              <ListSymbol color={symbolDetails[0]} text={symbolDetails[1]} />
                            )}
                          </ListDetailsSpanHeader>
                          {!isMobile
                            && (
                              <ListParagraph $day>
                                {formatTime(listItem.starts)}
                              </ListParagraph>
                            )}
                          <ListDetailsSection>
                            <ListDetailsSpan>
                              <ListParagraph>
                                {listItem.body_clean}
                              </ListParagraph>
                            </ListDetailsSpan>
                            <ArrowButtonSimple isCalendar isSmall isWhite />
                          </ListDetailsSection>
                        </ListItemCard>
                      </NavLink>
                    );
                  })}
                </div>
              ))}
            {loading
              && (
                <LoaderContainer>
                  <Loader />
                </LoaderContainer>
              )}
          </ListContainer>
        </ListWrapper>
      </PageContainer>
      {isDesktop && (
        <CalendarDisplay />
      )}
    </>
  );
}
