import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { formatDate } from '../../utils/timeUtils';
import { Loader } from './Loader';
import { ArrowButtonSimple } from '../ui/Buttons';

  export const ListHeader = styled.h4`
  font-weight: 500;
  color: var(--secondary-color);
  letter-spacing: .2rem;
  font-size: 13vw;

  @media (min-width: 350px) and (max-width: 743px) {
    font-size: 45px;
  }
  
  @media (min-width: 744px) and (max-width: 1279px) {
    padding: 0px;
    color: var(--secondary-color);
    font-size: 45px;
  }

  @media (min-width: 1280px) {
    color: var(--secondary-color);
    font-size: 52px;
  }
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  padding: 30px 15px;
  border-top: 1px solid var(--secondary-color);

  @media (min-width: 744px) and (max-width: 1279px) {
    height: 100%;
    width: 80%;
    padding-top: 30px;
  }

  @media (min-width: 1280px) {
    width: 80%;
    left: 100px;
    height: 100%;
    top: 170px;
    padding: 0px;
    padding-top: 30px;
  }
`

export const ListItemCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;
  gap: 2px;
  width: auto;

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
    width: 60%;
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

export const LoaderContainer = styled.div`
  height: 60vh;

  @media (min-width: 744px) and (max-width: 1279px) {
    height: 100%;
  }

  @media (min-width: 1280px) {
    height: 100%;
  }
`

const CalendarListSimple = ({ loading, eventList, type }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 744px)' })

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
    {eventList.length > 0 && (
      <ListContainer className="list-scroll">
      <ListHeader>Liknande evenemang</ListHeader>
      {eventList.map((listItem) => {
        return (
          <NavLink
            to={`/kalendarium/${listItem.id}`}
            style={{ width: '100%' }}
            key={listItem.id}>
            <ListItemCard>
              <ListDetailsSpan>
                {isMobile
                  && (
                    <ListParagraph $day>
                      {formatDate(listItem.starts)},&nbsp;
                      {formatTime(listItem.starts)}
                    </ListParagraph>
                  )}
                <ListDetailsSpanHeader>
                  <StyledH5>{listItem.title}</StyledH5>
                </ListDetailsSpanHeader>
                {!isMobile
                  && (
                    <ListParagraph $day>
                      {formatDate(listItem.starts)},&nbsp;
                      {formatTime(listItem.starts)}
                    </ListParagraph>
                )}
                <ListParagraph>
                  {listItem.body_clean}
                </ListParagraph>
              </ListDetailsSpan>
              <ArrowButtonSimple
                  isCalendar
                  isSmall
                  isWhite />
            </ListItemCard>
          </NavLink>
        );
      })}
      {loading
        && (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
    </ListContainer>
    )}
    </>
  );
}

export default CalendarListSimple
