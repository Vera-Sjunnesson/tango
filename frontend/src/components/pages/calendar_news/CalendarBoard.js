import React, { useState, useEffect } from 'react';
import { StyledWrapper, BackgroundContainer } from 'components/lib/ContainerStyles';
import { renderMarkdown } from 'components/pages/details/NewsDetails';
import { BackgroundLine } from 'components/lib/BackgroundLine';
import { NavLink } from 'react-router-dom';
import { Header } from 'components/lib/Header';
import { GoBackButton, ArrowButton2 } from 'components/lib/Buttons';
import { useMediaQuery } from 'react-responsive'
import { ListDescription } from 'components/pages/calendar_news/sections_calendar_news/ListDescription';
import { Loader } from 'components/lib/loader';
import { ListParagraph } from 'components/lib/Paragraphs';
import { CalendarDisplay } from './sections_calendar_news/CalendarDisplay';
import { ListWrapper, HeaderContainer, ListHeader, ListContainer, DateHeader, ListItemCard, StyledH5, ListDetailsSection, ListDetailsSpan, FacititatorDetails } from './styles_calendar_news/ListStyles';

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

  useEffect(() => {
    setLoading(true);
    const fetchEventList = async () => {
      try {
        const url = process.env.REACT_APP_EVENTLIST_URL
        console.log('url:', url);
        if (!url) {
          throw new Error('Failed to fetch event list');
        }

        const response = await fetch(url);
        console.log('Response:', response);
        const data = await response.json();
        setList((prevList) => [...prevList, ...data]);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchEventList();
  }, []);

  const formatDate = (inputDate) => {
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric'
    };
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString('sv-SE', options);
    const [weekday, day, monthWithDot, hour] = formattedDate.split(' ');
    const monthWithoutDot = monthWithDot.replace('.', '');
    return `kl ${hour}, ${weekday} ${day} ${monthWithoutDot}`;
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
    <>
      <StyledWrapper>
        <Header isSmall />
        <BackgroundContainer $img={`${process.env.PUBLIC_URL}/images/R00_6323_d.jpg`}>
          <GoBackButton />
          <BackgroundLine isCover backgroundimg={`${process.env.PUBLIC_URL}/assets/line02-01.svg`} />
          <ListWrapper>
            <HeaderContainer>
              <ListHeader>KALENDARIUM</ListHeader>
              <ListDescription />
            </HeaderContainer>
            <ListContainer>
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
                                  // eslint-disable-next-line
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
        </BackgroundContainer>
      </StyledWrapper>
      {isDesktop && (
        <CalendarDisplay />
      )}
    </>
  );
}
