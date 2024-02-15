import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import useEventStore from '../../../stores/EventStore';
import { ListDescription, ListSymbol } from '../../sections/ListDescription';
import { Loader } from '../../sections/Loader';
import { BigCalendarDisplay } from '../../sections/BigCalendarDisplay';
import CalendarBg from '../../../assets/images/R00_6323_d.jpg'
import CalendarBgLine from '../../../assets/graphics/line02-01.svg'
import { getBackgroundAndSymbol } from '../../../utils/styleUtils';
import { BackgroundLine } from '../../sections/BackgroundLine';
import { ArrowButtonSimple } from '../../ui/Buttons';
import { 
  StyledWrapper,
  BackgroundContainer,
  PageContainer,
  ListWrapper,
  HeaderContainer,
  ListHeader,
  ListContainer,
  DateHeader,
  ListItemCard,
  ListParagraph,
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

const CalendarBoard = () => {
  const { getEvents, eventList, loading } = useEventStore();
  const sortedList = eventList ? sortListItemsByDate(eventList) : {};
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 744px)' })

  useEffect(() => {
    const fetchEventList = async () => {
      await getEvents();
    };
    fetchEventList();
  }, [getEvents]);

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

  return (
    <>
      <PageContainer>
        <StyledWrapper>
          <BackgroundContainer $img={CalendarBg} />
          <BackgroundLine isCover backgroundimg={CalendarBgLine} />
        </StyledWrapper>
        <ListWrapper>
          <HeaderContainer>
            <ListHeader>KALENDARIUM</ListHeader>
            <ListDescription getEvents={getEvents} />
          </HeaderContainer>
          <ListContainer className="list-scroll">
            {!loading
              && Object.keys(sortedList).map((date) => (
                <div
                  style={{ width: '100%' }}
                  key={date}>
                  <DateHeader>
                    {date}
                  </DateHeader>
                  {sortedList[date].map((listItem) => {
                    const categoryStyle = getBackgroundAndSymbol(listItem.type);
                    return (
                      <NavLink
                        to={`/kalendarium/${listItem.id}`}
                        key={listItem.id}>
                        <ListItemCard
                          key={listItem.id}
                          style={{ backgroundColor: categoryStyle[0] }}>
                          <ListDetailsSpanHeader>
                            <StyledH5>{listItem.title}</StyledH5>
                            {categoryStyle[0] !== '' && (
                              <ListSymbol
                                color={categoryStyle[0]}
                                text={categoryStyle[1]} />
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
                            <ArrowButtonSimple
                              isCalendar
                              isSmall
                              isWhite />
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

export default CalendarBoard
