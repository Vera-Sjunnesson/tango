import { useState, useEffect } from 'react';
import { StyledWrapper, BackgroundContainer, PageContainer } from '../../ui/ContainerStyles';
import { BackgroundLine } from '../../sections/BackgroundLine';
import { NavLink } from 'react-router-dom';
import { Header } from '../../sections/Header';
import { ArrowButtonSimple, GoBackButtonResponsive } from '../../ui/Buttons';
import { useMediaQuery } from 'react-responsive'
import { ListDescription, ListSymbol } from '../../sections/ListDescription';
import { Loader } from '../../sections/Loader';
import { ListParagraph } from '../../ui/Paragraphs';
import { BigCalendarDisplay } from '../../sections/BigCalendarDisplay';
import CalendarBg from '../../../assets/images/R00_6323_d.jpg'
import CalendarBgLine from '../../../assets/graphics/line02-01.svg'
import { 
  ListWrapper,
  HeaderContainer,
  ListHeader,
  ListContainer,
  DateHeader,
  ListItemCard,
  StyledH5,
  ListDetailsSection,
  ListDetailsSpan,
  LoaderContainer,
  ListDetailsSpanHeader } from './CalendarBoardStyles';


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

  const getBackgroundAndSymbol = (type) => {
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
          <BackgroundContainer $img={CalendarBg} />
          <BackgroundLine isCover backgroundimg={CalendarBgLine} />
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
                    const categoryStyle = getBackgroundAndSymbol(listItem.type);
                    return (
                      <NavLink to={`/kalendarium/${listItem.id}`} key={listItem.id}>
                        {/* eslint-disable-next-line max-len */}
                        <ListItemCard key={listItem.id} style={{ backgroundColor: categoryStyle[0] }}>
                          <ListDetailsSpanHeader>
                            <StyledH5>{listItem.title}</StyledH5>
                            {categoryStyle[0] !== '' && (
                              <ListSymbol color={categoryStyle[0]} text={categoryStyle[1]} />
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
        <BigCalendarDisplay />
      )}
    </>
  );
}
